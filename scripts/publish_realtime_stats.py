#!/usr/bin/env python3
"""Publish a sanitized statistics JSON file and explicitly rebuild legacy Pages."""

from __future__ import annotations

import argparse
import base64
import json
import math
import os
import re
import time
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen


API_VERSION = "2026-03-10"
METRIC_KEYS = ("trajectories", "tasks", "trajectory_duration_seconds")
TASKS_DAILY_KEYS = {
    "utc_date",
    "baseline_utc_date",
    "baseline_total",
    "increase",
    "basis",
}
TASKS_DAILY_BASES = {"estimated", "verified", "unavailable"}
MAX_TASK_DAILY_BASELINE_AGE = timedelta(hours=6)


class PublishError(RuntimeError):
    """A safe-to-print publishing error."""


class GitHubClient:
    def __init__(self, repository: str, token: str, api_url: str) -> None:
        if repository.count("/") != 1:
            raise PublishError("GITHUB_REPOSITORY must have the form owner/name.")
        self.repository = repository
        self.token = token
        self.api_url = api_url.rstrip("/")

    def request(
        self,
        method: str,
        path: str,
        payload: dict[str, Any] | None = None,
    ) -> dict[str, Any]:
        data = None
        if payload is not None:
            data = json.dumps(payload, separators=(",", ":")).encode("utf-8")
        request = Request(
            f"{self.api_url}/repos/{self.repository}{path}",
            data=data,
            method=method,
            headers={
                "Accept": "application/vnd.github+json",
                "Authorization": f"Bearer {self.token}",
                "Content-Type": "application/json",
                "User-Agent": "axis-realtime-statistics",
                "X-GitHub-Api-Version": API_VERSION,
            },
        )
        try:
            with urlopen(request, timeout=30) as response:
                body = response.read()
        except HTTPError as exc:
            raise PublishError(
                f"GitHub API {method} {path.split('?', 1)[0]} failed with HTTP {exc.code}."
            ) from None
        except (URLError, TimeoutError):
            raise PublishError(
                f"GitHub API {method} {path.split('?', 1)[0]} could not be reached."
            ) from None

        if not body:
            return {}
        try:
            parsed = json.loads(body)
        except json.JSONDecodeError:
            raise PublishError("GitHub API returned an invalid response.") from None
        if not isinstance(parsed, dict):
            raise PublishError("GitHub API returned an unexpected response.")
        return parsed


def parse_utc_date(value: Any, field_name: str) -> date:
    if not isinstance(value, str):
        raise PublishError(f"The generated {field_name} is invalid.")
    try:
        parsed = date.fromisoformat(value)
    except ValueError:
        raise PublishError(f"The generated {field_name} is invalid.") from None
    if parsed.isoformat() != value:
        raise PublishError(f"The generated {field_name} is invalid.")
    return parsed


def validate_nonnegative_integer(value: Any, field_name: str) -> int:
    if (
        isinstance(value, bool)
        or not isinstance(value, (int, float))
        or not math.isfinite(value)
        or not float(value).is_integer()
        or value < 0
        or value > 2**53 - 1
    ):
        raise PublishError(f"The generated {field_name} is invalid.")
    return int(value)


def validate_tasks_daily(
    payload: Any,
    total_tasks: int,
    sampled_utc_date: date,
) -> dict[str, Any]:
    if not isinstance(payload, dict) or set(payload) != TASKS_DAILY_KEYS:
        raise PublishError("The generated daily task statistics are invalid.")

    utc_date = parse_utc_date(payload.get("utc_date"), "daily task date")
    if utc_date != sampled_utc_date:
        raise PublishError(
            "The generated daily task date does not match the snapshot date."
        )
    basis = payload.get("basis")
    if basis not in TASKS_DAILY_BASES:
        raise PublishError("The generated daily task basis is invalid.")

    baseline_date_value = payload.get("baseline_utc_date")
    baseline_total_value = payload.get("baseline_total")
    increase_value = payload.get("increase")

    if basis == "estimated":
        if baseline_date_value is not None or baseline_total_value is not None:
            raise PublishError(
                "Estimated daily task statistics cannot contain a baseline."
            )
        increase = validate_nonnegative_integer(
            increase_value,
            "estimated daily task increase",
        )
        if increase > total_tasks:
            raise PublishError(
                "The estimated daily task increase exceeds the task total."
            )
        baseline_utc_date = None
        baseline_total = None
    elif basis == "verified":
        baseline_utc_date = parse_utc_date(
            baseline_date_value,
            "daily task baseline date",
        )
        if utc_date - baseline_utc_date != timedelta(days=1):
            raise PublishError(
                "The generated daily task baseline is not the previous UTC date."
            )
        baseline_total = validate_nonnegative_integer(
            baseline_total_value,
            "daily task baseline",
        )
        increase = validate_nonnegative_integer(
            increase_value,
            "daily task increase",
        )
        if baseline_total > total_tasks or increase != total_tasks - baseline_total:
            raise PublishError(
                "The generated daily task increase does not match its baseline."
            )
    else:
        if any(
            value is not None
            for value in (
                baseline_date_value,
                baseline_total_value,
                increase_value,
            )
        ):
            raise PublishError(
                "Unavailable daily task statistics cannot contain values."
            )
        baseline_utc_date = None
        baseline_total = None
        increase = None

    return {
        "utc_date": utc_date.isoformat(),
        "baseline_utc_date": (
            baseline_utc_date.isoformat()
            if isinstance(baseline_utc_date, date)
            else None
        ),
        "baseline_total": baseline_total,
        "increase": increase,
        "basis": basis,
    }


def validate_public_snapshot(path: Path) -> tuple[bytes, str]:
    try:
        raw = path.read_bytes()
        payload = json.loads(raw)
    except (OSError, json.JSONDecodeError) as exc:
        raise PublishError("The generated statistics snapshot is unreadable.") from exc

    expected_top_level = {
        "schema_version",
        "status",
        "sample_id",
        "sampled_at",
        "previous_sampled_at",
        "sample_interval_seconds",
        "totals",
        "delta_since_previous",
        "growth_per_hour",
        "tasks_daily",
    }
    if not isinstance(payload, dict) or set(payload) != expected_top_level:
        raise PublishError("The generated statistics snapshot has an invalid schema.")
    if (
        payload.get("schema_version") != 1
        or payload.get("status") != "ok"
        or not isinstance(payload.get("sample_id"), str)
        or re.fullmatch(r"[0-9a-f]{16}", payload["sample_id"]) is None
        or not isinstance(payload.get("sampled_at"), str)
    ):
        raise PublishError("The generated statistics snapshot has an invalid schema.")

    parsed_timestamps: dict[str, datetime | None] = {}
    for timestamp_key in ("sampled_at", "previous_sampled_at"):
        timestamp = payload.get(timestamp_key)
        if timestamp is None and timestamp_key == "previous_sampled_at":
            parsed_timestamps[timestamp_key] = None
            continue
        try:
            parsed_timestamp = datetime.fromisoformat(timestamp.replace("Z", "+00:00"))
        except (AttributeError, ValueError):
            raise PublishError(
                f"The generated {timestamp_key} timestamp is invalid."
            ) from None
        if parsed_timestamp.tzinfo is None:
            raise PublishError(
                f"The generated {timestamp_key} timestamp must include a timezone."
            )
        parsed_timestamps[timestamp_key] = parsed_timestamp.astimezone(timezone.utc)

    totals = payload.get("totals")
    delta = payload.get("delta_since_previous")
    growth = payload.get("growth_per_hour")
    if (
        not isinstance(totals, dict)
        or not isinstance(delta, dict)
        or not isinstance(growth, dict)
        or set(totals) != set(METRIC_KEYS)
        or set(delta) != set(METRIC_KEYS)
        or set(growth) != set(METRIC_KEYS)
    ):
        raise PublishError("The generated statistics snapshot is missing metrics.")

    tasks_total = validate_nonnegative_integer(
        totals.get("tasks"),
        "tasks total",
    )
    validate_tasks_daily(
        payload.get("tasks_daily"),
        tasks_total,
        parsed_timestamps["sampled_at"].date(),
    )

    for key in METRIC_KEYS:
        total = totals.get(key)
        if (
            not isinstance(total, (int, float))
            or isinstance(total, bool)
            or not math.isfinite(total)
            or total < 0
            or total > 2**53 - 1
            or (
                key in {"trajectories", "tasks"}
                and not float(total).is_integer()
            )
        ):
            raise PublishError(f"The generated {key} total is invalid.")
        for field_name, values in (("delta", delta), ("rate", growth)):
            value = values.get(key)
            if value is not None and (
                not isinstance(value, (int, float))
                or isinstance(value, bool)
                or not math.isfinite(value)
                or value < 0
                or value > 2**53 - 1
            ):
                raise PublishError(f"The generated {key} {field_name} is invalid.")
        if delta.get(key) is not None and delta[key] > total:
            raise PublishError(f"The generated {key} delta exceeds its total.")

    interval = payload.get("sample_interval_seconds")
    if interval is not None and (
        not isinstance(interval, (int, float))
        or isinstance(interval, bool)
        or not math.isfinite(interval)
        or interval <= 0
    ):
        raise PublishError("The generated sample interval is invalid.")
    has_previous = payload.get("previous_sampled_at") is not None
    if has_previous != (interval is not None):
        raise PublishError("The generated previous-snapshot metadata is inconsistent.")
    if any((delta[key] is None) != (not has_previous) for key in METRIC_KEYS):
        raise PublishError("The generated growth metadata is inconsistent.")
    for key in ("trajectories", "trajectory_duration_seconds"):
        if (growth[key] is None) != (not has_previous):
            raise PublishError("The generated growth metadata is inconsistent.")
    if growth["tasks"] is not None:
        raise PublishError("Hourly task growth must not be published.")

    # This branch is publicly served. Refuse oversized output so an accidental
    # row-level dump can never be committed by this workflow. Re-serialize only
    # the exact allowlisted schema instead of trusting the collector's bytes.
    raw = (
        json.dumps(payload, indent=2, sort_keys=True, ensure_ascii=False) + "\n"
    ).encode("utf-8")
    if len(raw) > 32 * 1024:
        raise PublishError("The generated statistics snapshot exceeds the 32 KiB safety limit.")
    return raw, payload["sample_id"]


def validate_monotonic_against_previous(
    raw_snapshot: bytes,
    previous_path: Path,
) -> None:
    try:
        new_payload = json.loads(raw_snapshot)
        previous_bytes = previous_path.read_bytes()
        previous_payload = json.loads(previous_bytes)
    except (OSError, json.JSONDecodeError):
        raise PublishError("The previous statistics snapshot is unreadable.") from None

    if len(previous_bytes) > 32 * 1024 or not isinstance(previous_payload, dict):
        raise PublishError("The previous statistics snapshot has an invalid schema.")
    if (
        previous_payload.get("schema_version") == 1
        and previous_payload.get("status") == "awaiting_first_sync"
    ):
        return

    previous_raw, _ = validate_public_snapshot(previous_path)
    previous_payload = json.loads(previous_raw)
    if new_payload["previous_sampled_at"] != previous_payload["sampled_at"]:
        raise PublishError(
            "The generated snapshot does not reference the previous sample timestamp."
        )

    new_time = datetime.fromisoformat(new_payload["sampled_at"].replace("Z", "+00:00"))
    previous_time = datetime.fromisoformat(
        previous_payload["sampled_at"].replace("Z", "+00:00")
    )
    expected_interval = (new_time - previous_time).total_seconds()
    if (
        expected_interval <= 0
        or not math.isclose(
            new_payload["sample_interval_seconds"],
            expected_interval,
            rel_tol=0,
            abs_tol=0.001,
        )
    ):
        raise PublishError("The generated sample interval does not match the baseline.")

    for key in METRIC_KEYS:
        if new_payload["totals"][key] < previous_payload["totals"][key]:
            raise PublishError(
                f"The generated {key} total is lower than the previous snapshot."
            )
        expected_delta = new_payload["totals"][key] - previous_payload["totals"][key]
        if key == "trajectory_duration_seconds":
            expected_delta = round(float(expected_delta), 3)
        else:
            expected_delta = int(expected_delta)
        if new_payload["delta_since_previous"][key] != expected_delta:
            raise PublishError(
                f"The generated {key} delta does not match the previous snapshot."
            )
        if key == "tasks":
            if new_payload["growth_per_hour"][key] is not None:
                raise PublishError("Hourly task growth must not be published.")
            continue
        expected_rate = round(expected_delta * 3600 / expected_interval, 3)
        if not math.isclose(
            new_payload["growth_per_hour"][key],
            expected_rate,
            rel_tol=0,
            abs_tol=0.001,
        ):
            raise PublishError(
                f"The generated {key} rate does not match the sample interval."
            )

    new_daily = new_payload["tasks_daily"]
    previous_daily = previous_payload["tasks_daily"]
    new_date = parse_utc_date(new_daily["utc_date"], "daily task date")
    previous_date = parse_utc_date(
        previous_daily["utc_date"],
        "previous daily task date",
    )
    day_gap = new_date - previous_date

    if day_gap == timedelta(0):
        if new_daily["basis"] != previous_daily["basis"]:
            raise PublishError(
                "The daily task basis changed within the same UTC date."
            )
        if new_daily["basis"] in {"estimated", "unavailable"}:
            if new_daily != previous_daily:
                raise PublishError(
                    "Daily task metadata changed within the same UTC date."
                )
        else:
            if (
                new_daily["baseline_utc_date"]
                != previous_daily["baseline_utc_date"]
                or new_daily["baseline_total"]
                != previous_daily["baseline_total"]
                or new_daily["increase"] < previous_daily["increase"]
            ):
                raise PublishError(
                    "The verified daily task baseline changed unexpectedly."
                )
    elif day_gap == timedelta(days=1):
        if expected_interval <= MAX_TASK_DAILY_BASELINE_AGE.total_seconds():
            if (
                new_daily["basis"] != "verified"
                or new_daily["baseline_utc_date"] != previous_date.isoformat()
                or new_daily["baseline_total"] != previous_payload["totals"]["tasks"]
            ):
                raise PublishError(
                    "The new UTC day does not use the previous task total as its baseline."
                )
        elif new_daily["basis"] != "unavailable":
            raise PublishError(
                "A stale task baseline cannot be published as a daily increase."
            )
    elif day_gap > timedelta(days=1):
        if new_daily["basis"] != "unavailable":
            raise PublishError(
                "A multi-day task gap cannot be published as a daily increase."
            )
    else:
        raise PublishError("The daily task date moved backwards.")


def assert_legacy_pages_source(
    client: GitHubClient,
    branch: str,
) -> None:
    pages = client.request("GET", "/pages")
    source = pages.get("source")
    if (
        pages.get("build_type") != "legacy"
        or not isinstance(source, dict)
        or source.get("branch") != branch
        or source.get("path") != "/"
    ):
        raise PublishError(
            f"GitHub Pages must remain configured for legacy {branch}:/ publishing."
        )


def file_blob_at_ref(client: GitHubClient, ref: str, path: str) -> str:
    encoded_path = quote(path, safe="/")
    content = client.request(
        "GET",
        f"/contents/{encoded_path}?ref={quote(ref, safe='')}",
    )
    if content.get("type") != "file" or not isinstance(content.get("sha"), str):
        raise PublishError(f"{path} must already exist at the requested Git reference.")
    return content["sha"]


def update_snapshot_file(
    client: GitHubClient,
    branch: str,
    path: str,
    current_blob_sha: str,
    raw_snapshot: bytes,
    sample_id: str,
) -> str:
    response = client.request(
        "PUT",
        f"/contents/{quote(path, safe='/')}",
        {
            "message": f"chore(stats): refresh snapshot {sample_id} [skip ci]",
            "content": base64.b64encode(raw_snapshot).decode("ascii"),
            "sha": current_blob_sha,
            "branch": branch,
        },
    )
    commit = response.get("commit")
    if not isinstance(commit, dict) or not isinstance(commit.get("sha"), str):
        raise PublishError("GitHub did not return the statistics commit SHA.")
    return commit["sha"]


def request_pages_build(client: GitHubClient) -> None:
    client.request("POST", "/pages/builds")


def wait_for_pages_build(
    client: GitHubClient,
    commit_sha: str,
    timeout_seconds: int,
) -> None:
    deadline = time.monotonic() + timeout_seconds
    while time.monotonic() < deadline:
        latest = client.request("GET", "/pages/builds/latest")
        if latest.get("commit") != commit_sha:
            time.sleep(5)
            continue
        status = latest.get("status")
        if status == "built":
            return
        if status == "errored":
            raise PublishError("GitHub Pages reported that the statistics build failed.")
        time.sleep(5)
    raise PublishError("Timed out waiting for the statistics Pages build.")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--snapshot", type=Path, required=True)
    parser.add_argument("--previous", type=Path, required=True)
    parser.add_argument("--repository", default=os.getenv("GITHUB_REPOSITORY", ""))
    parser.add_argument("--branch", default="main")
    parser.add_argument("--path", default="data/realtime-stats.json")
    parser.add_argument("--expected-ref", default=os.getenv("GITHUB_SHA", ""))
    parser.add_argument("--token-env", default="GITHUB_TOKEN")
    parser.add_argument("--api-url", default=os.getenv("GITHUB_API_URL", "https://api.github.com"))
    parser.add_argument("--wait-seconds", type=int, default=600)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        token = os.getenv(args.token_env, "")
        if not token:
            raise PublishError(f"Required workflow token {args.token_env} is not configured.")
        if not args.expected_ref:
            raise PublishError("GITHUB_SHA is required to prevent concurrent publishing races.")

        raw_snapshot, sample_id = validate_public_snapshot(args.snapshot)
        validate_monotonic_against_previous(raw_snapshot, args.previous)
        client = GitHubClient(args.repository, token, args.api_url)
        assert_legacy_pages_source(client, args.branch)

        baseline_blob = file_blob_at_ref(client, args.expected_ref, args.path)
        current_blob = file_blob_at_ref(client, args.branch, args.path)
        if current_blob != baseline_blob:
            raise PublishError(
                "A newer statistics snapshot was published during collection; rerun from that baseline."
            )

        commit_sha = update_snapshot_file(
            client,
            args.branch,
            args.path,
            current_blob,
            raw_snapshot,
            sample_id,
        )
        request_pages_build(client)
        wait_for_pages_build(client, commit_sha, args.wait_seconds)
    except PublishError as exc:
        print(f"error: {exc}", file=os.sys.stderr)
        return 1

    print(f"Published statistics snapshot {sample_id}; GitHub Pages build succeeded.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
