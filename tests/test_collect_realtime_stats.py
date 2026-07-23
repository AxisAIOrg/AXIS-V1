import json
import sys
import tempfile
import types
import unittest
from datetime import datetime, timedelta, timezone
from pathlib import Path
from unittest.mock import patch

from scripts.collect_realtime_stats import (
    STATS_QUERY,
    StatsCollectionError,
    build_snapshot,
    build_tasks_daily,
    load_previous_snapshot,
    normalize_database_url,
    query_database_totals,
    write_snapshot,
)


def estimated_tasks_daily(utc_date, increase=9):
    return {
        "utc_date": utc_date,
        "baseline_utc_date": None,
        "baseline_total": None,
        "increase": increase,
        "basis": "estimated",
    }


class CollectRealtimeStatsTests(unittest.TestCase):
    def test_query_uses_the_existing_verified_trajectory_definition(self):
        for fragment in (
            "a.is_completed = true",
            "a.pass_verify = true",
            "tt.pass_verify = true",
            "COALESCE(u.stage, '') <> 'ban'",
            "tt.trajectory_s3_bucket IS NOT NULL",
            "tt.trajectory_s3_key IS NOT NULL",
            "COUNT(DISTINCT a.task_id)",
            "a.simulation_time_seconds",
        ):
            self.assertIn(fragment, STATS_QUERY)

    def test_normalizes_reference_repo_sqlalchemy_url(self):
        normalized = normalize_database_url(
            "postgresql+psycopg://example.test:5432/axis?sslmode=verify-full"
        )
        self.assertEqual(
            normalized,
            "postgresql://example.test:5432/axis?sslmode=verify-full",
        )

    def test_rejects_database_url_without_tls(self):
        with self.assertRaises(StatsCollectionError):
            normalize_database_url("postgresql://example.test/axis")

    def test_rejects_encryption_without_hostname_verification(self):
        with self.assertRaises(StatsCollectionError):
            normalize_database_url(
                "postgresql://example.test/axis?sslmode=require"
            )

    def test_malformed_url_error_never_contains_a_credential_fragment(self):
        credential_fragment = "do-not-log-me"
        malformed_url = "".join(
            (
                "postgresql://user:",
                credential_fragment,
                "／rest@example.test/axis?sslmode=verify-full",
            )
        )

        with self.assertRaises(StatsCollectionError) as raised:
            normalize_database_url(malformed_url)

        self.assertEqual(
            str(raised.exception),
            "The statistics database URL is invalid.",
        )
        self.assertNotIn(credential_fragment, str(raised.exception))

    def test_transient_database_failures_are_retried_without_local_state(self):
        class FakeOperationalError(Exception):
            pass

        class FakeCursor:
            def __enter__(self):
                return self

            def __exit__(self, *_):
                return False

            def execute(self, _):
                return None

            def fetchone(self):
                return (100, 10, 3600.0, datetime(2026, 7, 23, tzinfo=timezone.utc))

        class FakeConnection:
            def __enter__(self):
                return self

            def __exit__(self, *_):
                return False

            def cursor(self):
                return FakeCursor()

        attempts = []

        def connect(*_, **__):
            attempts.append(True)
            if len(attempts) < 3:
                raise FakeOperationalError()
            return FakeConnection()

        fake_psycopg = types.SimpleNamespace(
            OperationalError=FakeOperationalError,
            connect=connect,
        )
        with (
            patch.dict(sys.modules, {"psycopg": fake_psycopg}),
            patch("scripts.collect_realtime_stats.time.sleep") as sleep,
        ):
            totals, sampled_at = query_database_totals(
                "postgresql://example.test/axis?sslmode=verify-full",
                Path("/tmp/test-ca.pem"),
            )

        self.assertEqual(len(attempts), 3)
        self.assertEqual([call.args[0] for call in sleep.call_args_list], [2, 5])
        self.assertEqual(totals["trajectories"], 100)
        self.assertEqual(sampled_at, datetime(2026, 7, 23, tzinfo=timezone.utc))

    def test_first_snapshot_establishes_baseline(self):
        sampled_at = datetime(2026, 7, 23, 12, 0, tzinfo=timezone.utc)
        snapshot = build_snapshot(
            {
                "trajectories": 1_000_000,
                "tasks": 1_006,
                "trajectory_duration_seconds": 3_600_000.5,
            },
            sampled_at,
            None,
            initial_task_daily_estimate=9,
        )

        self.assertEqual(snapshot["status"], "ok")
        self.assertEqual(snapshot["sampled_at"], "2026-07-23T12:00:00Z")
        self.assertIsNone(snapshot["previous_sampled_at"])
        self.assertTrue(all(value is None for value in snapshot["growth_per_hour"].values()))
        self.assertEqual(
            snapshot["tasks_daily"],
            estimated_tasks_daily("2026-07-23"),
        )

    def test_growth_rate_uses_actual_sample_interval(self):
        previous_time = datetime(2026, 7, 23, 10, 0, tzinfo=timezone.utc)
        sampled_at = previous_time + timedelta(hours=2)
        previous = {
            "sampled_at": previous_time,
            "totals": {
                "trajectories": 1_000,
                "tasks": 100,
                "trajectory_duration_seconds": 50_000,
            },
            "tasks_daily": estimated_tasks_daily("2026-07-23", 4),
        }

        snapshot = build_snapshot(
            {
                "trajectories": 1_300,
                "tasks": 104,
                "trajectory_duration_seconds": 57_200,
            },
            sampled_at,
            previous,
        )

        self.assertEqual(snapshot["sample_interval_seconds"], 7200)
        self.assertEqual(snapshot["delta_since_previous"]["trajectories"], 300)
        self.assertEqual(snapshot["growth_per_hour"]["trajectories"], 150)
        self.assertIsNone(snapshot["growth_per_hour"]["tasks"])
        self.assertEqual(
            snapshot["tasks_daily"],
            estimated_tasks_daily("2026-07-23", 4),
        )
        self.assertEqual(
            snapshot["growth_per_hour"]["trajectory_duration_seconds"],
            3600,
        )

    def test_subsecond_database_time_matches_serialized_sample_interval(self):
        previous_time = datetime(2026, 7, 23, 10, 0, tzinfo=timezone.utc)
        sampled_at = datetime(
            2026,
            7,
            23,
            11,
            0,
            0,
            750_000,
            tzinfo=timezone.utc,
        )
        snapshot = build_snapshot(
            {
                "trajectories": 1_100,
                "tasks": 100,
                "trajectory_duration_seconds": 53_600,
            },
            sampled_at,
            {
                "sampled_at": previous_time,
                "totals": {
                    "trajectories": 1_000,
                    "tasks": 100,
                    "trajectory_duration_seconds": 50_000,
                },
                "tasks_daily": estimated_tasks_daily("2026-07-23"),
            },
        )

        self.assertEqual(snapshot["sampled_at"], "2026-07-23T11:00:00Z")
        self.assertEqual(snapshot["sample_interval_seconds"], 3600)
        self.assertEqual(snapshot["growth_per_hour"]["trajectories"], 100)

    def test_estimated_task_growth_stays_fixed_for_bootstrap_day(self):
        previous_time = datetime(2026, 7, 23, 10, 0, tzinfo=timezone.utc)
        daily = build_tasks_daily(
            105,
            previous_time + timedelta(hours=2),
            {
                "sampled_at": previous_time,
                "totals": {
                    "trajectories": 1_000,
                    "tasks": 100,
                    "trajectory_duration_seconds": 50_000,
                },
                "tasks_daily": estimated_tasks_daily("2026-07-23"),
            },
        )

        self.assertEqual(daily, estimated_tasks_daily("2026-07-23"))

    def test_first_snapshot_without_explicit_estimate_hides_daily_growth(self):
        daily = build_tasks_daily(
            100,
            datetime(2026, 7, 23, 12, 0, tzinfo=timezone.utc),
            None,
        )

        self.assertEqual(daily["basis"], "unavailable")
        self.assertIsNone(daily["increase"])

    def test_next_utc_day_uses_previous_task_total_as_verified_baseline(self):
        previous_time = datetime(2026, 7, 23, 23, 17, tzinfo=timezone.utc)
        daily = build_tasks_daily(
            104,
            previous_time + timedelta(hours=1),
            {
                "sampled_at": previous_time,
                "totals": {
                    "trajectories": 1_000,
                    "tasks": 100,
                    "trajectory_duration_seconds": 50_000,
                },
                "tasks_daily": estimated_tasks_daily("2026-07-23"),
            },
        )

        self.assertEqual(
            daily,
            {
                "utc_date": "2026-07-24",
                "baseline_utc_date": "2026-07-23",
                "baseline_total": 100,
                "increase": 4,
                "basis": "verified",
            },
        )

    def test_verified_task_growth_accumulates_without_moving_daily_baseline(self):
        previous_time = datetime(2026, 7, 24, 0, 17, tzinfo=timezone.utc)
        daily = build_tasks_daily(
            103,
            previous_time + timedelta(hours=4),
            {
                "sampled_at": previous_time,
                "totals": {
                    "trajectories": 1_000,
                    "tasks": 100,
                    "trajectory_duration_seconds": 50_000,
                },
                "tasks_daily": {
                    "utc_date": "2026-07-24",
                    "baseline_utc_date": "2026-07-23",
                    "baseline_total": 95,
                    "increase": 5,
                    "basis": "verified",
                },
            },
        )

        self.assertEqual(daily["baseline_total"], 95)
        self.assertEqual(daily["increase"], 8)
        self.assertEqual(daily["basis"], "verified")

    def test_multi_day_gap_hides_daily_task_growth(self):
        previous_time = datetime(2026, 7, 21, 23, 17, tzinfo=timezone.utc)
        daily = build_tasks_daily(
            105,
            datetime(2026, 7, 23, 0, 17, tzinfo=timezone.utc),
            {
                "sampled_at": previous_time,
                "totals": {
                    "trajectories": 1_000,
                    "tasks": 100,
                    "trajectory_duration_seconds": 50_000,
                },
                "tasks_daily": estimated_tasks_daily("2026-07-21"),
            },
        )

        self.assertEqual(
            daily,
            {
                "utc_date": "2026-07-23",
                "baseline_utc_date": None,
                "baseline_total": None,
                "increase": None,
                "basis": "unavailable",
            },
        )

    def test_long_adjacent_date_gap_is_not_labeled_as_one_day(self):
        previous_time = datetime(2026, 7, 23, 0, 17, tzinfo=timezone.utc)
        daily = build_tasks_daily(
            120,
            datetime(2026, 7, 24, 23, 17, tzinfo=timezone.utc),
            {
                "sampled_at": previous_time,
                "totals": {
                    "trajectories": 1_000,
                    "tasks": 100,
                    "trajectory_duration_seconds": 50_000,
                },
                "tasks_daily": estimated_tasks_daily("2026-07-23"),
            },
        )

        self.assertEqual(daily["basis"], "unavailable")
        self.assertIsNone(daily["increase"])

    def test_database_correction_never_decreases_public_totals(self):
        previous_time = datetime(2026, 7, 23, 11, 0, tzinfo=timezone.utc)
        snapshot = build_snapshot(
            {
                "trajectories": 990,
                "tasks": 99,
                "trajectory_duration_seconds": 49_000,
            },
            previous_time + timedelta(hours=1),
            {
                "sampled_at": previous_time,
                "totals": {
                    "trajectories": 1_000,
                    "tasks": 100,
                    "trajectory_duration_seconds": 50_000,
                },
                "tasks_daily": estimated_tasks_daily("2026-07-23"),
            },
        )

        self.assertEqual(snapshot["totals"]["trajectories"], 1_000)
        self.assertEqual(snapshot["totals"]["tasks"], 100)
        self.assertEqual(snapshot["totals"]["trajectory_duration_seconds"], 50_000)
        self.assertTrue(
            all(value == 0 for value in snapshot["delta_since_previous"].values())
        )
        self.assertTrue(
            all(
                value == 0
                for key, value in snapshot["growth_per_hour"].items()
                if key != "tasks"
            )
        )
        self.assertIsNone(snapshot["growth_per_hour"]["tasks"])

    def test_bootstrap_file_loads_as_no_previous_snapshot(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "snapshot.json"
            path.write_text(
                json.dumps(
                    {
                        "schema_version": 1,
                        "status": "awaiting_first_sync",
                    }
                ),
                encoding="utf-8",
            )
            self.assertIsNone(load_previous_snapshot(path))

    def test_write_then_load_snapshot(self):
        sampled_at = datetime(2026, 7, 23, 12, 0, tzinfo=timezone.utc)
        snapshot = build_snapshot(
            {
                "trajectories": 10,
                "tasks": 2,
                "trajectory_duration_seconds": 30.5,
            },
            sampled_at,
            None,
        )
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "snapshot.json"
            write_snapshot(path, snapshot)
            loaded = load_previous_snapshot(path)

        self.assertEqual(loaded["sampled_at"], sampled_at)
        self.assertEqual(loaded["totals"], snapshot["totals"])


if __name__ == "__main__":
    unittest.main()
