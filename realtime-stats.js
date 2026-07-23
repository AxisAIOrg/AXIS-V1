(function attachRealtimeStats(root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root && root.document) {
    api.init(root.document, root);
  }
})(typeof window !== "undefined" ? window : globalThis, function createRealtimeStats() {
  "use strict";

  const HOUR_MS = 60 * 60 * 1000;
  const STALE_AFTER_MS = 2 * HOUR_MS;
  const POLL_INTERVAL_MS = 5 * 60 * 1000;
  const FETCH_TIMEOUT_MS = 15 * 1000;
  const MAX_SCHEDULE_STEPS = 720;
  const RENDER_INTERVAL_MS = 250;
  const FALLBACK_TOTALS = {
    trajectories: 1530275,
    tasks: 1816,
    duration: 49122405
  };

  const metricDefinitions = {
    trajectories: {
      totalKey: "trajectories",
      rateKey: "trajectories",
      valueId: "stats-trajectories",
      rateId: "stats-trajectories-rate",
      arrowId: "stats-trajectories-arrow",
      discrete: true
    },
    tasks: {
      totalKey: "tasks",
      rateKey: "tasks",
      valueId: "stats-tasks",
      rateId: "stats-tasks-rate",
      arrowId: "stats-tasks-arrow",
      discrete: true
    },
    duration: {
      totalKey: "trajectory_duration_seconds",
      rateKey: "trajectory_duration_seconds",
      valueId: "stats-duration",
      rateId: "stats-duration-rate",
      arrowId: "stats-duration-arrow",
      discrete: false
    }
  };

  function isSafeNonNegativeNumber(value) {
    return Number.isFinite(value) && value >= 0 && value <= Number.MAX_SAFE_INTEGER;
  }

  function parseTimestamp(value) {
    const timestamp = typeof value === "string" ? Date.parse(value) : NaN;
    if (!Number.isFinite(timestamp)) {
      throw new Error("The statistics snapshot has an invalid sampled_at timestamp.");
    }
    return timestamp;
  }

  function parseSnapshot(payload) {
    if (!payload || typeof payload !== "object" || payload.schema_version !== 1) {
      throw new Error("The statistics snapshot has an unsupported schema.");
    }

    if (payload.status === "awaiting_first_sync") {
      return {
        schemaVersion: 1,
        status: "awaiting_first_sync",
        sampleId: null,
        sampledAt: null,
        sampledAtMs: null,
        totals: null,
        deltaSincePrevious: null,
        growthPerHour: null
      };
    }

    if (payload.status !== "ok" || typeof payload.sample_id !== "string") {
      throw new Error("The statistics snapshot is not ready.");
    }

    const totals = payload.totals;
    const delta = payload.delta_since_previous;
    const growth = payload.growth_per_hour;
    if (
      !totals
      || typeof totals !== "object"
      || !delta
      || typeof delta !== "object"
      || !growth
      || typeof growth !== "object"
    ) {
      throw new Error("The statistics snapshot is missing metric values.");
    }

    for (const key of ["trajectories", "tasks", "trajectory_duration_seconds"]) {
      if (!isSafeNonNegativeNumber(totals[key])) {
        throw new Error(`The statistics snapshot has an invalid ${key} total.`);
      }
      if (
        delta[key] !== null
        && (
          !Number.isFinite(delta[key])
          || delta[key] < 0
          || delta[key] > totals[key]
        )
      ) {
        throw new Error(`The statistics snapshot has an invalid ${key} delta.`);
      }
      if (
        growth[key] !== null
        && (
          !Number.isFinite(growth[key])
          || growth[key] < 0
          || Math.abs(growth[key]) > Number.MAX_SAFE_INTEGER
        )
      ) {
        throw new Error(`The statistics snapshot has an invalid ${key} growth rate.`);
      }
    }

    if (!Number.isInteger(totals.trajectories) || !Number.isInteger(totals.tasks)) {
      throw new Error("Trajectory and task totals must be integers.");
    }

    return {
      schemaVersion: 1,
      status: "ok",
      sampleId: payload.sample_id,
      sampledAt: payload.sampled_at,
      sampledAtMs: parseTimestamp(payload.sampled_at),
      totals: {
        trajectories: totals.trajectories,
        tasks: totals.tasks,
        trajectory_duration_seconds: totals.trajectory_duration_seconds
      },
      deltaSincePrevious: {
        trajectories: delta.trajectories,
        tasks: delta.tasks,
        trajectory_duration_seconds: delta.trajectory_duration_seconds
      },
      growthPerHour: {
        trajectories: growth.trajectories,
        tasks: growth.tasks,
        trajectory_duration_seconds: growth.trajectory_duration_seconds
      }
    };
  }

  function hashString(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function seededRandom(seed) {
    let state = seed >>> 0;
    return function nextRandom() {
      state += 0x6d2b79f5;
      let value = state;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  }

  function buildGrowthSchedule(amount, seed, discrete) {
    if (!Number.isFinite(amount) || amount <= 0) {
      return { target: 0, thresholds: [] };
    }

    const target = discrete ? Math.max(0, Math.round(amount)) : amount;
    if (target === 0) {
      return { target: 0, thresholds: [] };
    }

    const stepCount = Math.min(
      MAX_SCHEDULE_STEPS,
      Math.max(1, Math.ceil(target))
    );
    const random = seededRandom(hashString(seed));
    const thresholds = [];

    // Independent event times create deterministic bursts and quiet gaps.
    // Sorting preserves monotonic playback, and progress=1 still completes
    // every scheduled step within the hour.
    for (let index = 0; index < stepCount; index += 1) {
      thresholds.push(Math.max(Number.EPSILON, random()));
    }
    thresholds.sort((left, right) => left - right);
    thresholds[thresholds.length - 1] = 1;

    return { target, thresholds };
  }

  function completedScheduleSteps(thresholds, progress) {
    let low = 0;
    let high = thresholds.length;
    while (low < high) {
      const middle = Math.floor((low + high) / 2);
      if (thresholds[middle] <= progress) low = middle + 1;
      else high = middle;
    }
    return low;
  }

  function distributedGrowth(schedule, elapsedMs) {
    if (!schedule || schedule.target <= 0 || schedule.thresholds.length === 0) return 0;
    const progress = Math.min(1, Math.max(0, elapsedMs / HOUR_MS));
    const completed = completedScheduleSteps(schedule.thresholds, progress);
    return schedule.target * (completed / schedule.thresholds.length);
  }

  function projectMetric(snapshot, key, nowMs, schedule) {
    const measured = snapshot.totals[key];
    const verifiedIncrease = snapshot.deltaSincePrevious
      ? snapshot.deltaSincePrevious[key]
      : null;

    // Animate only an already-verified increase, from the previous total toward
    // the current total. This can never overshoot or fall at the next snapshot.
    if (!Number.isFinite(verifiedIncrease) || verifiedIncrease <= 0) return measured;

    const elapsedMs = Math.max(0, nowMs - snapshot.sampledAtMs);
    const previousMeasured = Math.max(0, measured - verifiedIncrease);
    return Math.min(
      measured,
      previousMeasured + distributedGrowth(schedule, elapsedMs)
    );
  }

  function snapshotState(snapshot, nowMs, fetchFailed) {
    if (!snapshot || snapshot.status === "awaiting_first_sync") {
      return fetchFailed ? "error" : "baseline";
    }
    if (nowMs - snapshot.sampledAtMs > STALE_AFTER_MS) return "stale";
    if (fetchFailed) return "error";
    if (Object.values(snapshot.growthPerHour).every((value) => value === null)) return "baseline";
    if (nowMs - snapshot.sampledAtMs >= HOUR_MS) return "paused";
    return "live";
  }

  function formatInteger(value) {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(value));
  }

  function formatDuration(seconds) {
    const totalMinutes = Math.round(Math.max(0, seconds) / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const formattedHours = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0
    }).format(hours);
    return `${formattedHours} h ${minutes} m`;
  }

  function formatRate(value, kind) {
    if (value === null || !Number.isFinite(value)) return "";

    const nonNegativeValue = Math.max(0, value);
    const converted = kind === "duration" ? nonNegativeValue / 3600 : nonNegativeValue;
    const absolute = Math.abs(converted);
    const unit = kind === "duration" ? " h / hour" : " / hour";
    if (converted === 0) return `0${unit}`;

    const sign = "+";
    if (kind === "duration" && absolute < 0.1) {
      const absoluteMinutes = nonNegativeValue / 60;
      if (absoluteMinutes < 0.1) return `${sign}<0.1 min / hour`;
      const formattedMinutes = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: absoluteMinutes < 1 ? 1 : 0,
        maximumFractionDigits: absoluteMinutes < 1 ? 1 : 0
      }).format(absoluteMinutes);
      return `${sign}${formattedMinutes} min / hour`;
    }
    if (kind !== "duration" && absolute < 0.01) {
      return `${sign}<0.01 / hour`;
    }

    const fractionDigits = absolute >= 10 ? 0 : absolute >= 1 ? 1 : absolute >= 0.1 ? 2 : 3;
    const formatted = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits
    }).format(absolute);
    return `${sign}${formatted}${unit}`;
  }

  function growthDirection(value) {
    if (!Number.isFinite(value)) {
      return { symbol: "↗", state: "potential" };
    }
    if (value > 0) return { symbol: "↗", state: "growing" };
    return { symbol: "→", state: "steady" };
  }

  function monotonicValue(candidate, previous) {
    if (!Number.isFinite(candidate)) return Number.isFinite(previous) ? previous : 0;
    return Number.isFinite(previous) ? Math.max(candidate, previous) : candidate;
  }

  function shouldAcceptSnapshot(current, incoming) {
    if (!current) return true;
    if (incoming.status !== "ok") return current.status !== "ok";
    if (current.status !== "ok") return true;
    for (const key of ["trajectories", "tasks", "trajectory_duration_seconds"]) {
      if (incoming.totals[key] < current.totals[key]) return false;
    }
    if (incoming.sampledAtMs > current.sampledAtMs) return true;
    return (
      incoming.sampledAtMs === current.sampledAtMs
      && incoming.sampleId !== current.sampleId
    );
  }

  function rollingCharacters(previousText, nextText) {
    const previous = Array.from(previousText || "");
    const next = Array.from(nextText);
    const canAnimate = previous.length === next.length;
    let digitRankFromRight = 0;

    return next.map((character, index) => {
      const previousCharacter = canAnimate ? previous[index] : character;
      const isDigit = character >= "0" && character <= "9";
      const previousIsDigit = previousCharacter >= "0" && previousCharacter <= "9";
      return {
        character,
        previousCharacter,
        isDigit,
        rolls: (
          canAnimate
          && isDigit
          && previousIsDigit
          && character !== previousCharacter
        ),
        rankFromRight: 0
      };
    }).map((item, index, items) => {
      if (!item.isDigit) return item;
      digitRankFromRight = items
        .slice(index + 1)
        .filter((candidate) => candidate.isDigit)
        .length;
      return { ...item, rankFromRight: digitRankFromRight };
    });
  }

  function createResponseClock(response, browser) {
    const headerValue = response && response.headers ? response.headers.get("Date") : null;
    const serverEpochMs = headerValue ? Date.parse(headerValue) : NaN;
    const performanceNow = browser.performance && typeof browser.performance.now === "function"
      ? browser.performance.now.bind(browser.performance)
      : null;

    if (!Number.isFinite(serverEpochMs) || !performanceNow) {
      return () => Date.now();
    }

    const anchoredAt = performanceNow();
    return () => serverEpochMs + (performanceNow() - anchoredAt);
  }

  function init(documentObject, browser) {
    const container = documentObject.getElementById("realtime-statistics");
    if (!container || typeof browser.fetch !== "function") return;

    const statusElement = documentObject.getElementById("stats-status");
    const endpoint = container.dataset.statsUrl || "./data/realtime-stats.json";
    const reducedMotion = browser.matchMedia
      && browser.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = {};
    for (const [kind, definition] of Object.entries(metricDefinitions)) {
      elements[kind] = {
        value: documentObject.getElementById(definition.valueId),
        rate: documentObject.getElementById(definition.rateId),
        arrow: documentObject.getElementById(definition.arrowId)
      };
    }

    container.dataset.state = "loading";
    container.setAttribute("aria-busy", "true");

    let snapshot = null;
    let schedules = {};
    let fetchFailed = false;
    let loadInFlight = false;
    let activeController = null;
    let now = () => Date.now();
    const lastRenderedValues = {
      trajectories: null,
      tasks: null,
      duration: null
    };

    function setText(element, value) {
      if (element.textContent !== value) element.textContent = value;
    }

    function renderRollingValue(element, valueText) {
      const isInitialRender = element.dataset.rollingReady !== "true";
      const previousText = element.dataset.displayValue || element.textContent.trim();
      if (
        previousText === valueText
        && !isInitialRender
      ) {
        return;
      }

      element.dataset.displayValue = valueText;
      element.removeAttribute("aria-label");
      if (reducedMotion) {
        element.textContent = valueText;
        element.dataset.rollingReady = "true";
        return;
      }

      const characters = rollingCharacters(previousText, valueText);
      const fragment = documentObject.createDocumentFragment();
      const accessibleValue = documentObject.createElement("span");
      accessibleValue.className = "stats-value-sr";
      accessibleValue.textContent = valueText;
      fragment.appendChild(accessibleValue);
      for (const item of characters) {
        if (!item.isDigit) {
          const glyph = documentObject.createElement("span");
          glyph.className = item.character === " "
            ? "stats-glyph stats-glyph--space"
            : "stats-glyph";
          glyph.setAttribute("aria-hidden", "true");
          glyph.textContent = item.character === " " ? "\u00a0" : item.character;
          fragment.appendChild(glyph);
          continue;
        }

        const digit = documentObject.createElement("span");
        digit.className = "stats-digit";
        digit.setAttribute("aria-hidden", "true");
        const track = documentObject.createElement("span");
        track.className = isInitialRender
          ? "stats-digit-track is-entering"
          : item.rolls
            ? "stats-digit-track is-rolling"
            : "stats-digit-track";
        track.style.setProperty(
          "--digit-delay",
          isInitialRender
            ? `${220 + Math.min(item.rankFromRight, 5) * 42}ms`
            : `${Math.min(item.rankFromRight, 5) * 24}ms`
        );

        if (item.rolls && !isInitialRender) {
          const previousFace = documentObject.createElement("span");
          previousFace.className = "stats-digit-face";
          previousFace.textContent = item.previousCharacter;
          track.appendChild(previousFace);
        }

        const currentFace = documentObject.createElement("span");
        currentFace.className = "stats-digit-face";
        currentFace.textContent = item.character;
        track.appendChild(currentFace);
        digit.appendChild(track);
        fragment.appendChild(digit);
      }

      element.replaceChildren(fragment);
      element.dataset.rollingReady = "true";
    }

    function rebuildSchedules() {
      schedules = {};
      if (!snapshot || snapshot.status !== "ok") return;
      for (const [kind, definition] of Object.entries(metricDefinitions)) {
        const verifiedIncrease = snapshot.deltaSincePrevious[definition.rateKey];
        schedules[kind] = buildGrowthSchedule(
          Math.min(verifiedIncrease || 0, snapshot.totals[definition.totalKey]),
          `${snapshot.sampleId}:${definition.rateKey}:verified`,
          definition.discrete
        );
      }
    }

    function render() {
      const nowMs = now();
      const state = snapshotState(snapshot, nowMs, fetchFailed);
      container.dataset.state = state;
      const statusContent = {
        live: "Real-time statistics are active.",
        baseline: "Real-time statistics are available.",
        paused: "Real-time statistics are awaiting the next update.",
        stale: "The statistics update is delayed.",
        error: "Showing the latest available statistics."
      };
      setText(statusElement, statusContent[state]);

      if (!snapshot || snapshot.status !== "ok") {
        for (const [kind, item] of Object.entries(elements)) {
          const fallbackValue = monotonicValue(
            FALLBACK_TOTALS[kind],
            lastRenderedValues[kind]
          );
          lastRenderedValues[kind] = fallbackValue;
          const valueText = kind === "duration"
            ? formatDuration(fallbackValue)
            : formatInteger(fallbackValue);
          renderRollingValue(item.value, valueText);
          item.value.removeAttribute("title");
          item.value.classList.toggle("is-long", valueText.length > 7);
          setText(item.rate, "");
          item.rate.hidden = true;
          const direction = growthDirection(null);
          setText(item.arrow, direction.symbol);
          item.arrow.dataset.direction = direction.state;
        }
        return;
      }

      for (const [kind, definition] of Object.entries(metricDefinitions)) {
        const liveProjected = projectMetric(
          snapshot,
          definition.totalKey,
          nowMs,
          schedules[kind]
        );
        const projected = monotonicValue(
          liveProjected,
          lastRenderedValues[kind]
        );
        lastRenderedValues[kind] = projected;
        const valueText = kind === "duration"
          ? formatDuration(projected)
          : formatInteger(projected);

        renderRollingValue(elements[kind].value, valueText);
        elements[kind].value.classList.toggle("is-long", valueText.length > 7);
        elements[kind].value.removeAttribute("title");
        const growth = snapshot.growthPerHour[definition.rateKey];
        const rateText = formatRate(growth, kind);
        setText(elements[kind].rate, rateText);
        elements[kind].rate.hidden = rateText === "";
        const direction = growthDirection(growth);
        setText(elements[kind].arrow, direction.symbol);
        elements[kind].arrow.dataset.direction = direction.state;
      }
    }

    async function loadSnapshot() {
      if (loadInFlight) return;
      loadInFlight = true;
      container.setAttribute("aria-busy", "true");
      const url = new URL(endpoint, documentObject.baseURI);
      url.searchParams.set("snapshot", String(Math.floor(Date.now() / POLL_INTERVAL_MS)));
      activeController = typeof browser.AbortController === "function"
        ? new browser.AbortController()
        : null;
      let timeoutId;

      try {
        const fetchPromise = browser.fetch(url.toString(), {
          cache: "no-store",
          headers: { Accept: "application/json" },
          ...(activeController ? { signal: activeController.signal } : {})
        });
        const timeoutPromise = new Promise((resolve, reject) => {
          timeoutId = browser.setTimeout(() => {
            if (activeController) activeController.abort();
            reject(new Error("Snapshot request timed out."));
          }, FETCH_TIMEOUT_MS);
        });
        const response = await Promise.race([fetchPromise, timeoutPromise]);
        if (!response.ok) throw new Error(`Snapshot request failed with ${response.status}.`);

        const parsed = parseSnapshot(await response.json());
        const responseClock = createResponseClock(response, browser);
        if (
          parsed.status === "ok"
          && parsed.sampledAtMs > responseClock() + 10 * 60 * 1000
        ) {
          throw new Error("The statistics snapshot timestamp is in the future.");
        }

        if (shouldAcceptSnapshot(snapshot, parsed)) {
          snapshot = parsed;
          now = responseClock;
          rebuildSchedules();
        }
        fetchFailed = false;
      } catch (error) {
        fetchFailed = true;
        if (browser.console && typeof browser.console.warn === "function") {
          browser.console.warn("Real-time statistics are temporarily unavailable.");
        }
      } finally {
        if (timeoutId !== undefined) browser.clearTimeout(timeoutId);
        activeController = null;
        try {
          render();
        } finally {
          container.setAttribute("aria-busy", "false");
          loadInFlight = false;
        }
      }
    }

    loadSnapshot();
    const pollTimer = browser.setInterval(loadSnapshot, POLL_INTERVAL_MS);
    const renderTimer = reducedMotion
      ? null
      : browser.setInterval(render, RENDER_INTERVAL_MS);

    documentObject.addEventListener("visibilitychange", () => {
      if (documentObject.visibilityState === "visible") render();
    });

    browser.addEventListener("pagehide", (event) => {
      if (event.persisted) return;
      if (activeController) activeController.abort();
      browser.clearInterval(pollTimer);
      if (renderTimer !== null) browser.clearInterval(renderTimer);
    }, { once: true });
  }

  return {
    HOUR_MS,
    STALE_AFTER_MS,
    FETCH_TIMEOUT_MS,
    RENDER_INTERVAL_MS,
    buildGrowthSchedule,
    distributedGrowth,
    formatDuration,
    formatRate,
    growthDirection,
    monotonicValue,
    rollingCharacters,
    shouldAcceptSnapshot,
    parseSnapshot,
    projectMetric,
    snapshotState,
    init
  };
});
