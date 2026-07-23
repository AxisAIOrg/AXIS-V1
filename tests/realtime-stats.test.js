const test = require("node:test");
const assert = require("node:assert/strict");
const stats = require("../realtime-stats.js");
const checkedInPayload = require("../data/realtime-stats.json");

function snapshot(overrides = {}) {
  return {
    status: "ok",
    sampleId: "sample-1",
    sampledAt: "2026-07-23T12:00:00Z",
    sampledAtMs: Date.parse("2026-07-23T12:00:00Z"),
    totals: {
      trajectories: 1000,
      tasks: 100,
      trajectory_duration_seconds: 36000
    },
    deltaSincePrevious: {
      trajectories: 150,
      tasks: 2,
      trajectory_duration_seconds: 3600
    },
    growthPerHour: {
      trajectories: 150,
      tasks: null,
      trajectory_duration_seconds: 3600
    },
    tasksDaily: {
      utcDate: "2026-07-23",
      baselineUtcDate: "2026-07-22",
      baselineTotal: 99,
      increase: 1,
      basis: "verified"
    },
    ...overrides
  };
}

test("parses an awaiting-first-sync bootstrap payload", () => {
  const parsed = stats.parseSnapshot({
    schema_version: 1,
    status: "awaiting_first_sync"
  });
  assert.equal(parsed.status, "awaiting_first_sync");
});

test("accepts the previous snapshot shape during a cached deployment rollover", () => {
  const parsed = stats.parseSnapshot({
    schema_version: 1,
    status: "ok",
    sample_id: "sample-legacy",
    sampled_at: "2026-07-23T12:00:00Z",
    totals: {
      trajectories: 100,
      tasks: 10,
      trajectory_duration_seconds: 3600
    },
    delta_since_previous: {
      trajectories: 5,
      tasks: 1,
      trajectory_duration_seconds: 60
    },
    growth_per_hour: {
      trajectories: 5,
      tasks: 1,
      trajectory_duration_seconds: 60
    }
  });

  assert.deepEqual(parsed.tasksDaily, {
    utcDate: "2026-07-23",
    baselineUtcDate: null,
    baselineTotal: null,
    increase: null,
    basis: "unavailable"
  });
});

test("rejects unsafe totals", () => {
  assert.throws(() => stats.parseSnapshot({
    schema_version: 1,
    status: "ok",
    sample_id: "sample-1",
    sampled_at: "2026-07-23T12:00:00Z",
    totals: {
      trajectories: Number.MAX_SAFE_INTEGER + 1,
      tasks: 10,
      trajectory_duration_seconds: 20
    },
    delta_since_previous: {
      trajectories: 1,
      tasks: 1,
      trajectory_duration_seconds: 1
    },
    growth_per_hour: {
      trajectories: 1,
      tasks: null,
      trajectory_duration_seconds: 1
    },
    tasks_daily: {
      utc_date: "2026-07-23",
      baseline_utc_date: "2026-07-22",
      baseline_total: 9,
      increase: 1,
      basis: "verified"
    }
  }));
});

test("growth distribution is deterministic, monotonic, and capped", () => {
  const scheduleA = stats.buildGrowthSchedule(150, "sample:trajectories", true);
  const scheduleB = stats.buildGrowthSchedule(150, "sample:trajectories", true);
  assert.deepEqual(scheduleA, scheduleB);

  const firstQuarter = stats.distributedGrowth(scheduleA, stats.HOUR_MS / 4);
  const half = stats.distributedGrowth(scheduleA, stats.HOUR_MS / 2);
  const complete = stats.distributedGrowth(scheduleA, stats.HOUR_MS * 2);
  const gaps = scheduleA.thresholds.map((threshold, index, thresholds) => (
    threshold - (index === 0 ? 0 : thresholds[index - 1])
  ));
  assert.ok(firstQuarter <= half);
  assert.ok(half >= 70 && half <= 80);
  assert.ok(scheduleA.thresholds[0] > 0);
  assert.equal(scheduleA.thresholds.at(-1), 1);
  assert.ok(
    scheduleA.thresholds.every(
      (threshold, index, thresholds) => index === 0 || threshold >= thresholds[index - 1]
    )
  );
  assert.ok(new Set(gaps.map((gap) => gap.toFixed(6))).size > 20);
  assert.equal(complete, 150);
});

test("verified increases animate up to, but never beyond, the measured total", () => {
  const value = snapshot();
  const schedule = stats.buildGrowthSchedule(150, "sample:trajectories", true);
  assert.equal(
    stats.projectMetric(value, "trajectories", value.sampledAtMs, schedule),
    850
  );
  assert.equal(
    stats.projectMetric(
      value,
      "trajectories",
      value.sampledAtMs + 2 * stats.HOUR_MS,
      schedule
    ),
    1000
  );
});

test("checked-in database delta plays from the previous totals to the latest totals in one hour", () => {
  const value = stats.parseSnapshot(checkedInPayload);
  const metrics = {
    trajectories: true,
    trajectory_duration_seconds: false
  };

  for (const [key, discrete] of Object.entries(metrics)) {
    const schedule = stats.buildGrowthSchedule(
      value.deltaSincePrevious[key],
      `${value.sampleId}:${key}:verified`,
      discrete
    );
    const start = value.totals[key] - value.deltaSincePrevious[key];
    assert.equal(
      stats.projectMetric(value, key, value.sampledAtMs, schedule),
      start
    );

    let previous = start;
    for (let minutes = 1; minutes <= 60; minutes += 1) {
      const projected = stats.projectMetric(
        value,
        key,
        value.sampledAtMs + minutes * 60 * 1000,
        schedule
      );
      assert.ok(projected >= previous);
      assert.ok(projected <= value.totals[key]);
      previous = projected;
    }
    assert.equal(previous, value.totals[key]);
  }
});

test("tasks use the measured total and a daily growth label", () => {
  const value = stats.parseSnapshot(checkedInPayload);
  assert.equal(value.totals.tasks, 1816);
  assert.deepEqual(value.tasksDaily, {
    utcDate: "2026-07-23",
    baselineUtcDate: null,
    baselineTotal: null,
    increase: 9,
    basis: "estimated"
  });
  assert.equal(
    stats.formatTasksDailyRate(value.tasksDaily),
    "Est. +9 / day"
  );
  assert.equal(
    stats.formatTasksDailyRate({
      ...value.tasksDaily,
      baselineUtcDate: "2026-07-23",
      baselineTotal: 1816,
      increase: 0,
      basis: "verified"
    }),
    "0 / day"
  );
  assert.equal(
    stats.formatTasksDailyRate({
      utcDate: "2026-07-25",
      baselineUtcDate: null,
      baselineTotal: null,
      increase: null,
      basis: "unavailable"
    }),
    ""
  );
});

test("negative input never decreases or renders as negative growth", () => {
  const value = snapshot({
    deltaSincePrevious: {
      trajectories: 0,
      tasks: 0,
      trajectory_duration_seconds: 0
    },
    growthPerHour: {
      trajectories: -10,
      tasks: null,
      trajectory_duration_seconds: 0
    }
  });
  const schedule = stats.buildGrowthSchedule(-10, "correction", true);
  assert.equal(
    stats.projectMetric(
      value,
      "trajectories",
      value.sampledAtMs + stats.HOUR_MS,
      schedule
    ),
    1000
  );
  assert.equal(stats.formatRate(-10, "trajectories"), "0 / hour");
});

test("zero and small rates never render as signed zero", () => {
  assert.equal(stats.formatRate(null, "trajectories"), "");
  assert.equal(stats.formatDuration(3_803_520), "1,056 h 32 m");
  assert.equal(stats.formatRate(0, "trajectories"), "0 / hour");
  assert.equal(stats.formatRate(0, "duration"), "0 h / hour");
  assert.equal(stats.formatRate(0.001, "trajectories"), "+<0.01 / hour");
  assert.equal(stats.formatRate(-1, "duration"), "0 h / hour");
});

test("growth arrows only reflect potential, growth, and steady states", () => {
  assert.deepEqual(
    stats.growthDirection(null),
    { symbol: "↗", state: "potential" }
  );
  assert.deepEqual(
    stats.growthDirection(12),
    { symbol: "↗", state: "growing" }
  );
  assert.deepEqual(
    stats.growthDirection(0),
    { symbol: "→", state: "steady" }
  );
  assert.deepEqual(
    stats.growthDirection(-3),
    { symbol: "→", state: "steady" }
  );
});

test("rendered values never move below the last displayed value", () => {
  assert.equal(stats.monotonicValue(100, null), 100);
  assert.equal(stats.monotonicValue(120, 100), 120);
  assert.equal(stats.monotonicValue(90, 120), 120);
  assert.equal(stats.monotonicValue(Number.NaN, 120), 120);
});

test("an available snapshot cannot be replaced by bootstrap or replayed data", () => {
  const current = snapshot();
  assert.equal(
    stats.shouldAcceptSnapshot(current, { status: "awaiting_first_sync" }),
    false
  );
  assert.equal(stats.shouldAcceptSnapshot(current, { ...current }), false);
  assert.equal(
    stats.shouldAcceptSnapshot(current, {
      ...current,
      sampleId: "sample-2",
      sampledAtMs: current.sampledAtMs + 1
    }),
    true
  );
  assert.equal(
    stats.shouldAcceptSnapshot(current, {
      ...current,
      sampleId: "sample-lower",
      sampledAtMs: current.sampledAtMs + 2,
      totals: {
        ...current.totals,
        trajectories: current.totals.trajectories - 1
      }
    }),
    false
  );
});

test("rolling digits move upward while punctuation and units stay fixed", () => {
  const characters = stats.rollingCharacters("1,099 h", "1,100 h");
  assert.equal(characters.map((item) => item.character).join(""), "1,100 h");
  assert.equal(characters[1].isDigit, false);
  assert.equal(characters[2].rolls, true);
  assert.equal(characters[3].rolls, true);
  assert.equal(characters[4].rolls, true);
  assert.equal(characters[5].isDigit, false);
  assert.equal(characters[6].isDigit, false);
});

test("snapshot pauses after one hour and becomes stale after two", () => {
  const value = snapshot();
  assert.equal(stats.snapshotState(value, value.sampledAtMs, false), "live");
  assert.equal(
    stats.snapshotState(value, value.sampledAtMs + stats.HOUR_MS, false),
    "paused"
  );
  assert.equal(
    stats.snapshotState(value, value.sampledAtMs + stats.STALE_AFTER_MS + 1, false),
    "stale"
  );
});
