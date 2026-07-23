#!/usr/bin/env python3
"""Collect a single, sanitized AXIS dataset statistics snapshot."""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import os
import tempfile
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, urlsplit, urlunsplit


SCHEMA_VERSION = 1
DATABASE_ENV_NAME = "AXIS_STATS_DATABASE_URL"
SSL_ROOT_CERT_ENV_NAME = "AXIS_STATS_SSL_ROOT_CERT"
METRIC_KEYS = ("trajectories", "tasks", "trajectory_duration_seconds")
QUERY_RETRY_DELAYS_SECONDS = (2, 5)
RETRYABLE_SQLSTATES = {
    "40001",  # serialization failure / read-replica recovery conflict
    "40P01",  # deadlock detected
    "57014",  # statement canceled
    "57P01",  # administrator shutdown
}

STATS_QUERY = """
SELECT
    COUNT(*)::bigint AS trajectories,
    COUNT(DISTINCT a.task_id)::bigint AS tasks,
    COALESCE(
        SUM(GREATEST(COALESCE(a.simulation_time_seconds, 0), 0)),
        0
    )::double precision AS trajectory_duration_seconds,
    CURRENT_TIMESTAMP AS sampled_at
FROM user_task_attempts AS a
JOIN task_trajectories AS tt ON tt.attempt_id = a.id
JOIN users AS u ON u.id = a.user_id
WHERE a.is_completed = true
  AND a.pass_verify = true
  AND tt.pass_verify = true
  AND COALESCE(u.stage, '') <> 'ban'
  AND tt.trajectory_s3_bucket IS NOT NULL
  AND tt.trajectory_s3_key IS NOT NULL
"""


class StatsCollectionError(RuntimeError):
    """A safe-to-print collector error that never contains credentials."""


def normalize_database_url(raw_url: str) -> str:
    """Convert the SQLAlchemy URL used by the reference repo for psycopg."""
    try:
        value = raw_url.strip()
        parts = urlsplit(value)
        if parts.scheme == "postgresql+psycopg":
            parts = parts._replace(scheme="postgresql")
            value = urlunsplit(parts)
        elif parts.scheme not in {"postgresql", "postgres"}:
            raise StatsCollectionError(
                "The statistics database URL must use PostgreSQL."
            )

        if not parts.hostname:
            raise StatsCollectionError("The statistics database URL is missing a host.")

        ssl_mode = parse_qs(parts.query).get("sslmode", [""])[0].lower()
    except (ValueError, UnicodeError):
        # urllib includes the offending netloc in some parsing errors. Never let
        # that implementation detail (and potentially a password substring)
        # reach a public Actions log.
        raise StatsCollectionError("The statistics database URL is invalid.") from None

    if ssl_mode != "verify-full":
        raise StatsCollectionError(
            "The statistics database URL must use sslmode=verify-full."
        )
    return value


def parse_utc_timestamp(value: Any) -> datetime:
    if not isinstance(value, str):
        raise StatsCollectionError("The previous snapshot timestamp is invalid.")
    normalized = value[:-1] + "+00:00" if value.endswith("Z") else value
    try:
        parsed = datetime.fromisoformat(normalized)
    except ValueError as exc:
        raise StatsCollectionError("The previous snapshot timestamp is invalid.") from exc
    if parsed.tzinfo is None:
        raise StatsCollectionError("The previous snapshot timestamp must include a timezone.")
    return parsed.astimezone(timezone.utc)


def format_utc_timestamp(value: datetime) -> str:
    if value.tzinfo is None:
        raise StatsCollectionError("The database snapshot timestamp must include a timezone.")
    return (
        value.astimezone(timezone.utc)
        .isoformat(timespec="seconds")
        .replace("+00:00", "Z")
    )


def validate_total(key: str, value: Any) -> int | float:
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        raise StatsCollectionError(f"The {key} total is not numeric.")
    if not math.isfinite(value) or value < 0 or value > 2**53 - 1:
        raise StatsCollectionError(f"The {key} total is outside the supported range.")
    if key in {"trajectories", "tasks"}:
        if not float(value).is_integer():
            raise StatsCollectionError(f"The {key} total must be an integer.")
        return int(value)
    return round(float(value), 3)


def validate_totals(payload: Any) -> dict[str, int | float]:
    if not isinstance(payload, dict):
        raise StatsCollectionError("The snapshot totals are missing.")
    return {key: validate_total(key, payload.get(key)) for key in METRIC_KEYS}


def load_previous_snapshot(path: Path) -> dict[str, Any] | None:
    if not path.exists():
        return None
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise StatsCollectionError("The previous statistics snapshot is unreadable.") from exc

    if (
        isinstance(payload, dict)
        and payload.get("schema_version") == SCHEMA_VERSION
        and payload.get("status") == "awaiting_first_sync"
    ):
        return None
    if not isinstance(payload, dict) or payload.get("schema_version") != SCHEMA_VERSION:
        raise StatsCollectionError("The previous statistics snapshot has an invalid schema.")
    if payload.get("status") != "ok":
        raise StatsCollectionError("The previous statistics snapshot has an invalid status.")

    return {
        "sampled_at": parse_utc_timestamp(payload.get("sampled_at")),
        "totals": validate_totals(payload.get("totals")),
    }


def validate_ssl_root_cert(path: Path) -> Path:
    try:
        certificate_bundle = path.read_bytes()
    except OSError as exc:
        raise StatsCollectionError("The trusted database CA bundle is unreadable.") from exc
    if b"-----BEGIN CERTIFICATE-----" not in certificate_bundle:
        raise StatsCollectionError("The trusted database CA bundle is invalid.")
    return path


def query_database_totals(
    database_url: str,
    ssl_root_cert: Path,
) -> tuple[dict[str, int | float], datetime]:
    try:
        import psycopg
    except ImportError as exc:
        raise StatsCollectionError("psycopg is required to query the statistics database.") from exc

    row = None
    for attempt in range(len(QUERY_RETRY_DELAYS_SECONDS) + 1):
        try:
            with psycopg.connect(
                database_url,
                connect_timeout=15,
                sslmode="verify-full",
                sslrootcert=str(ssl_root_cert),
            ) as connection:
                with connection.cursor() as cursor:
                    cursor.execute("SET TRANSACTION READ ONLY")
                    cursor.execute("SET LOCAL statement_timeout = '120s'")
                    cursor.execute(STATS_QUERY)
                    row = cursor.fetchone()
            break
        except Exception as exc:
            sqlstate = getattr(exc, "sqlstate", None)
            retryable = (
                isinstance(exc, psycopg.OperationalError)
                or (isinstance(sqlstate, str) and sqlstate.startswith("08"))
                or sqlstate in RETRYABLE_SQLSTATES
            )
            if not retryable or attempt >= len(QUERY_RETRY_DELAYS_SECONDS):
                # psycopg errors can include the database host or username. Keep
                # output generic; GitHub's automatic masking is not enough.
                raise StatsCollectionError(
                    "The read-only database statistics query failed."
                ) from None
            time.sleep(QUERY_RETRY_DELAYS_SECONDS[attempt])

    if row is None or len(row) != 4:
        raise StatsCollectionError("The database statistics query returned no snapshot.")

    totals = validate_totals(
        {
            "trajectories": row[0],
            "tasks": row[1],
            "trajectory_duration_seconds": row[2],
        }
    )
    sampled_at = row[3]
    if not isinstance(sampled_at, datetime) or sampled_at.tzinfo is None:
        raise StatsCollectionError("The database returned an invalid snapshot timestamp.")
    return totals, sampled_at.astimezone(timezone.utc)


def build_snapshot(
    totals: dict[str, int | float],
    sampled_at: datetime,
    previous: dict[str, Any] | None,
) -> dict[str, Any]:
    clean_totals = validate_totals(totals)
    if sampled_at.tzinfo is None:
        raise StatsCollectionError("The database snapshot timestamp must include a timezone.")
    sampled_at_utc = sampled_at.astimezone(timezone.utc)
    sampled_at_text = format_utc_timestamp(sampled_at_utc)
    interval_seconds: float | None = None
    previous_sampled_at: str | None = None
    delta: dict[str, int | float | None] = {key: None for key in METRIC_KEYS}
    growth: dict[str, float | None] = {key: None for key in METRIC_KEYS}

    if previous is not None:
        previous_totals = validate_totals(previous["totals"])
        clean_totals = {
            key: max(clean_totals[key], previous_totals[key])
            for key in METRIC_KEYS
        }
        previous_time = previous["sampled_at"]
        if not isinstance(previous_time, datetime) or previous_time.tzinfo is None:
            raise StatsCollectionError("The previous snapshot timestamp is invalid.")
        previous_time = previous_time.astimezone(timezone.utc)
        interval_seconds = (sampled_at_utc - previous_time).total_seconds()
        if interval_seconds <= 0:
            raise StatsCollectionError("The new database snapshot is not newer than the previous one.")

        previous_sampled_at = format_utc_timestamp(previous_time)
        for key in METRIC_KEYS:
            difference = clean_totals[key] - previous_totals[key]
            if key in {"trajectories", "tasks"}:
                delta[key] = int(difference)
            else:
                delta[key] = round(float(difference), 3)
            growth[key] = round(float(difference) * 3600 / interval_seconds, 3)

    sample_hash_input = json.dumps(
        {"sampled_at": sampled_at_text, "totals": clean_totals},
        sort_keys=True,
        separators=(",", ":"),
    ).encode("utf-8")
    sample_id = hashlib.sha256(sample_hash_input).hexdigest()[:16]

    return {
        "schema_version": SCHEMA_VERSION,
        "status": "ok",
        "sample_id": sample_id,
        "sampled_at": sampled_at_text,
        "previous_sampled_at": previous_sampled_at,
        "sample_interval_seconds": (
            round(interval_seconds, 3) if interval_seconds is not None else None
        ),
        "totals": clean_totals,
        "delta_since_previous": delta,
        "growth_per_hour": growth,
    }


def write_snapshot(path: Path, payload: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    serialized = json.dumps(payload, indent=2, sort_keys=True, ensure_ascii=False) + "\n"
    with tempfile.NamedTemporaryFile(
        "w",
        encoding="utf-8",
        dir=path.parent,
        prefix=f".{path.name}.",
        delete=False,
    ) as handle:
        handle.write(serialized)
        temporary_path = Path(handle.name)
    temporary_path.replace(path)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--previous", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--database-env", default=DATABASE_ENV_NAME)
    parser.add_argument("--ssl-root-cert-env", default=SSL_ROOT_CERT_ENV_NAME)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        raw_database_url = os.getenv(args.database_env, "")
        if not raw_database_url:
            raise StatsCollectionError(
                f"Required GitHub Secret {args.database_env} is not configured."
            )
        database_url = normalize_database_url(raw_database_url)
        ssl_root_cert_value = os.getenv(args.ssl_root_cert_env, "")
        if not ssl_root_cert_value:
            raise StatsCollectionError(
                f"Required CA bundle path {args.ssl_root_cert_env} is not configured."
            )
        ssl_root_cert = validate_ssl_root_cert(Path(ssl_root_cert_value))
        previous = load_previous_snapshot(args.previous)
        totals, sampled_at = query_database_totals(database_url, ssl_root_cert)
        snapshot = build_snapshot(totals, sampled_at, previous)
        write_snapshot(args.output, snapshot)
    except StatsCollectionError as exc:
        print(f"error: {exc}", file=os.sys.stderr)
        return 1

    print(f"Collected sanitized statistics snapshot {snapshot['sample_id']}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
