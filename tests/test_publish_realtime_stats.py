import json
import tempfile
import unittest
from pathlib import Path

from scripts.publish_realtime_stats import (
    PublishError,
    validate_monotonic_against_previous,
    validate_public_snapshot,
)


def valid_snapshot():
    return {
        "schema_version": 1,
        "status": "ok",
        "sample_id": "0123456789abcdef",
        "sampled_at": "2026-07-23T12:00:00Z",
        "previous_sampled_at": "2026-07-23T11:00:00Z",
        "sample_interval_seconds": 3600,
        "totals": {
            "trajectories": 100,
            "tasks": 10,
            "trajectory_duration_seconds": 3600.0,
        },
        "delta_since_previous": {
            "trajectories": 5,
            "tasks": 1,
            "trajectory_duration_seconds": 60.0,
        },
        "growth_per_hour": {
            "trajectories": 5.0,
            "tasks": None,
            "trajectory_duration_seconds": 60.0,
        },
        "tasks_daily": {
            "utc_date": "2026-07-23",
            "baseline_utc_date": "2026-07-22",
            "baseline_total": 9,
            "increase": 1,
            "basis": "verified",
        },
    }


class PublishRealtimeStatsTests(unittest.TestCase):
    def write_payload(self, directory, payload):
        path = Path(directory) / "snapshot.json"
        path.write_text(json.dumps(payload), encoding="utf-8")
        return path

    def test_accepts_sanitized_snapshot(self):
        with tempfile.TemporaryDirectory() as directory:
            raw, sample_id = validate_public_snapshot(
                self.write_payload(directory, valid_snapshot())
            )

        self.assertEqual(sample_id, "0123456789abcdef")
        self.assertIn(b'"trajectories": 100', raw)

    def test_accepts_first_collected_baseline(self):
        payload = valid_snapshot()
        payload["previous_sampled_at"] = None
        payload["sample_interval_seconds"] = None
        payload["delta_since_previous"] = {
            key: None for key in payload["delta_since_previous"]
        }
        payload["growth_per_hour"] = {
            key: None for key in payload["growth_per_hour"]
        }
        payload["tasks_daily"] = {
            "utc_date": "2026-07-23",
            "baseline_utc_date": None,
            "baseline_total": None,
            "increase": 1,
            "basis": "estimated",
        }
        with tempfile.TemporaryDirectory() as directory:
            _, sample_id = validate_public_snapshot(
                self.write_payload(directory, payload)
            )

        self.assertEqual(sample_id, "0123456789abcdef")

    def test_rejects_non_numeric_public_metric(self):
        payload = valid_snapshot()
        payload["totals"]["trajectories"] = "secret-or-row-data"
        with tempfile.TemporaryDirectory() as directory:
            with self.assertRaises(PublishError):
                validate_public_snapshot(self.write_payload(directory, payload))

    def test_rejects_unexpected_public_fields(self):
        payload = valid_snapshot()
        payload["unexpected_row_data"] = "must never be published"
        with tempfile.TemporaryDirectory() as directory:
            with self.assertRaises(PublishError):
                validate_public_snapshot(self.write_payload(directory, payload))

    def test_rejects_negative_growth(self):
        payload = valid_snapshot()
        payload["delta_since_previous"]["trajectories"] = -1
        payload["growth_per_hour"]["trajectories"] = -1
        with tempfile.TemporaryDirectory() as directory:
            with self.assertRaises(PublishError):
                validate_public_snapshot(self.write_payload(directory, payload))

    def test_rejects_delta_larger_than_total(self):
        payload = valid_snapshot()
        payload["delta_since_previous"]["tasks"] = 11
        with tempfile.TemporaryDirectory() as directory:
            with self.assertRaises(PublishError):
                validate_public_snapshot(self.write_payload(directory, payload))

    def test_rejects_hourly_task_growth(self):
        payload = valid_snapshot()
        payload["growth_per_hour"]["tasks"] = 1.0
        with tempfile.TemporaryDirectory() as directory:
            with self.assertRaises(PublishError):
                validate_public_snapshot(self.write_payload(directory, payload))

    def test_rejects_daily_task_increase_that_does_not_match_baseline(self):
        payload = valid_snapshot()
        payload["tasks_daily"]["increase"] = 2
        with tempfile.TemporaryDirectory() as directory:
            with self.assertRaises(PublishError):
                validate_public_snapshot(self.write_payload(directory, payload))

    def test_rejects_total_lower_than_previous_snapshot(self):
        previous = valid_snapshot()
        current = valid_snapshot()
        current["sample_id"] = "fedcba9876543210"
        current["sampled_at"] = "2026-07-23T13:00:00Z"
        current["previous_sampled_at"] = "2026-07-23T12:00:00Z"
        current["totals"]["trajectories"] = 99
        with tempfile.TemporaryDirectory() as directory:
            previous_path = self.write_payload(directory, previous)
            current_path = Path(directory) / "current.json"
            current_path.write_text(json.dumps(current), encoding="utf-8")
            raw_current, _ = validate_public_snapshot(current_path)
            with self.assertRaises(PublishError):
                validate_monotonic_against_previous(raw_current, previous_path)

    def test_accepts_snapshot_consistent_with_previous_baseline(self):
        previous = valid_snapshot()
        previous["sample_id"] = "aaaaaaaaaaaaaaaa"
        previous["sampled_at"] = "2026-07-23T11:00:00Z"
        previous["previous_sampled_at"] = "2026-07-23T10:00:00Z"
        previous["totals"] = {
            "trajectories": 95,
            "tasks": 9,
            "trajectory_duration_seconds": 3540.0,
        }
        previous["tasks_daily"] = {
            "utc_date": "2026-07-23",
            "baseline_utc_date": "2026-07-22",
            "baseline_total": 9,
            "increase": 0,
            "basis": "verified",
        }
        with tempfile.TemporaryDirectory() as directory:
            previous_path = self.write_payload(directory, previous)
            current_path = Path(directory) / "current.json"
            current_path.write_text(json.dumps(valid_snapshot()), encoding="utf-8")
            raw_current, _ = validate_public_snapshot(current_path)
            validate_monotonic_against_previous(raw_current, previous_path)

    def test_accepts_next_day_task_growth_from_previous_total(self):
        previous = valid_snapshot()
        previous["sample_id"] = "aaaaaaaaaaaaaaaa"
        previous["sampled_at"] = "2026-07-23T23:00:00Z"
        previous["previous_sampled_at"] = "2026-07-23T22:00:00Z"

        current = valid_snapshot()
        current["sample_id"] = "bbbbbbbbbbbbbbbb"
        current["sampled_at"] = "2026-07-24T00:00:00Z"
        current["previous_sampled_at"] = previous["sampled_at"]
        current["totals"] = {
            "trajectories": 105,
            "tasks": 12,
            "trajectory_duration_seconds": 3660.0,
        }
        current["delta_since_previous"] = {
            "trajectories": 5,
            "tasks": 2,
            "trajectory_duration_seconds": 60.0,
        }
        current["tasks_daily"] = {
            "utc_date": "2026-07-24",
            "baseline_utc_date": "2026-07-23",
            "baseline_total": 10,
            "increase": 2,
            "basis": "verified",
        }

        with tempfile.TemporaryDirectory() as directory:
            previous_path = self.write_payload(directory, previous)
            current_path = Path(directory) / "current.json"
            current_path.write_text(json.dumps(current), encoding="utf-8")
            raw_current, _ = validate_public_snapshot(current_path)
            validate_monotonic_against_previous(raw_current, previous_path)

    def test_stale_adjacent_date_baseline_must_hide_daily_growth(self):
        previous = valid_snapshot()
        previous["sample_id"] = "aaaaaaaaaaaaaaaa"
        previous["sampled_at"] = "2026-07-23T00:17:00Z"
        previous["previous_sampled_at"] = "2026-07-22T23:17:00Z"

        current = valid_snapshot()
        current["sample_id"] = "bbbbbbbbbbbbbbbb"
        current["sampled_at"] = "2026-07-24T23:17:00Z"
        current["previous_sampled_at"] = previous["sampled_at"]
        current["sample_interval_seconds"] = 47 * 3600
        current["totals"] = {
            "trajectories": 105,
            "tasks": 12,
            "trajectory_duration_seconds": 3660.0,
        }
        current["delta_since_previous"] = {
            "trajectories": 5,
            "tasks": 2,
            "trajectory_duration_seconds": 60.0,
        }
        current["growth_per_hour"] = {
            "trajectories": 0.106,
            "tasks": None,
            "trajectory_duration_seconds": 1.277,
        }
        current["tasks_daily"] = {
            "utc_date": "2026-07-24",
            "baseline_utc_date": "2026-07-23",
            "baseline_total": 10,
            "increase": 2,
            "basis": "verified",
        }

        with tempfile.TemporaryDirectory() as directory:
            previous_path = self.write_payload(directory, previous)
            current_path = Path(directory) / "current.json"
            current_path.write_text(json.dumps(current), encoding="utf-8")
            raw_current, _ = validate_public_snapshot(current_path)
            with self.assertRaises(PublishError):
                validate_monotonic_against_previous(raw_current, previous_path)

            current["tasks_daily"] = {
                "utc_date": "2026-07-24",
                "baseline_utc_date": None,
                "baseline_total": None,
                "increase": None,
                "basis": "unavailable",
            }
            current_path.write_text(json.dumps(current), encoding="utf-8")
            raw_current, _ = validate_public_snapshot(current_path)
            validate_monotonic_against_previous(raw_current, previous_path)


if __name__ == "__main__":
    unittest.main()
