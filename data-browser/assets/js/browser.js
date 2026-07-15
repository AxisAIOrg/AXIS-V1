const browserState = {
  search: "",
  category: "all",
  difficulty: "all",
  page: 1,
  pageSize: 18,
  selectedRecordId: null,
  cameraView: "thirdPerson"
};

const browserEls = {
  taskList: document.querySelector("#task-list"),
  visibleTaskCount: document.querySelector("#visible-task-count"),
  visibleTaskLabel: document.querySelector("#visible-task-label"),
  pageLabel: document.querySelector("#page-label"),
  prevPage: document.querySelector("#prev-page"),
  nextPage: document.querySelector("#next-page"),
  search: document.querySelector("#task-search"),
  category: document.querySelector("#category-filter"),
  difficulty: document.querySelector("#difficulty-filter"),
  applyFilters: document.querySelector("#apply-filters"),
  detailKicker: document.querySelector("#detail-kicker"),
  detailTitle: document.querySelector("#detail-title"),
  detailRecordId: document.querySelector("#detail-record-id"),
  detailDescription: document.querySelector("#detail-description"),
  detailTags: document.querySelector("#detail-tags"),
  taskSummary: document.querySelector("#task-summary"),
  totalTasks: document.querySelector("#browser-total-tasks"),
  totalEpisodes: document.querySelector("#browser-total-episodes"),
  totalDuration: document.querySelector("#browser-total-duration"),
  filteredRecords: document.querySelector("#filtered-records"),
  visibleDuration: document.querySelector("#visible-duration"),
  filteredTasks: document.querySelector("#filtered-tasks"),
  detailVideo: document.querySelector("#detail-video"),
  cameraToggle: document.querySelector("#camera-toggle")
};

const tasks = window.AXIS_BROWSER_DATA?.tasks || [];
const sourceSummary = window.AXIS_BROWSER_DATA?.sourceSummary || {};
const remoteUnrenderedTasks = window.AXIS_BROWSER_DATA?.remoteUnrenderedTasks || [];
const records = tasks.flatMap((task) => task.demos.map((demo) => ({ id: demo.id, task, demo })));
browserState.selectedRecordId = records[0]?.id || null;

function formatNumber(value) {
  return value.toLocaleString("en-US");
}

function formatDuration(totalSeconds) {
  const safeSeconds = Number.isFinite(totalSeconds) ? Math.max(0, totalSeconds) : 0;
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = Math.round(safeSeconds % 60);
  if (safeSeconds <= 0) return "0s";
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
  return `${Math.max(1, seconds)}s`;
}

function easeOutQuart(t) {
  return 1 - (1 - t) ** 4;
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
}

/** Count from 0 to target; `format` maps the numeric value to display text. */
function animateCount(el, target, { duration = 2400, delay = 0, format = formatNumber } = {}) {
  if (!el) return;
  const end = Number(target) || 0;
  el.textContent = format(0);
  if (prefersReducedMotion() || end <= 0) {
    el.textContent = format(end);
    return;
  }

  const run = () => {
    const start = performance.now();
    el.textContent = format(0);

    function frame(now) {
      const progress = Math.min(1, (now - start) / duration);
      const value = end * easeOutQuart(progress);
      el.textContent = format(value);
      if (progress < 1) requestAnimationFrame(frame);
      else el.textContent = format(end);
    }

    requestAnimationFrame(frame);
  };

  if (delay > 0) setTimeout(run, delay);
  else run();
}

function startHeroStatCountUps(episodes, durationSeconds, tasks) {
  const items = [
    [browserEls.totalEpisodes, episodes, (value) => formatNumber(Math.round(value))],
    [browserEls.totalDuration, durationSeconds, (value) => formatDuration(Math.round(value))],
    [browserEls.totalTasks, tasks, (value) => formatNumber(Math.round(value))]
  ];

  // Start all three together as soon as the next frame paints.
  requestAnimationFrame(() => {
    items.forEach(([el, target, format]) => {
      animateCount(el, target, {
        duration: 2200,
        delay: 0,
        format
      });
    });
  });
}

function formatFrameValue(demo) {
  return `${demo.estimatedFrames ? "~" : ""}${formatNumber(demo.frames)}`;
}

function getTaskLocalStats(task) {
  if (task.localStats) return task.localStats;
  const fallbackFrames = task.cleaning?.cleanFrames || task.demos?.[0]?.frames || 0;
  const fallbackFps = task.demos?.[0]?.targetHz || sourceSummary.fpsDefault || 30;
  return {
    episodes: task.cleaning?.cleanEpisodes || task.demos?.length || 0,
    frames: fallbackFrames,
    fps: fallbackFps,
    durationSeconds: fallbackFrames / fallbackFps
  };
}

function summarizeLocalRecords(recordSet) {
  const taskMap = new Map();
  recordSet.forEach(({ task }) => {
    taskMap.set(task.id, task);
  });

  return [...taskMap.values()].reduce(
    (summary, task) => {
      const stats = getTaskLocalStats(task);
      summary.tasks += 1;
      summary.episodes += stats.episodes || 0;
      summary.frames += stats.frames || 0;
      summary.durationSeconds += stats.durationSeconds || 0;
      return summary;
    },
    { tasks: 0, episodes: 0, frames: 0, durationSeconds: 0 }
  );
}

function summarizeRemoteTasks(remoteTasks) {
  return remoteTasks.reduce(
    (summary, task) => {
      summary.tasks += 1;
      summary.episodes += task.trajectoryCount || 0;
      summary.durationSeconds += task.durationSeconds || 0;
      return summary;
    },
    { tasks: 0, episodes: 0, frames: 0, durationSeconds: 0 }
  );
}

function getFilteredRemoteTasks() {
  if (browserState.category !== "all" || browserState.difficulty !== "all") return [];
  const query = browserState.search.trim().toLowerCase();
  return remoteUnrenderedTasks.filter((task) => {
    if (!query) return true;
    return [
      task.id,
      task.taskId,
      task.title,
      task.source,
      task.state
    ].join(" ").toLowerCase().includes(query);
  });
}

function summarizeVisibleScope(localRecords) {
  const summary = summarizeLocalRecords(localRecords);
  const remoteSummary = summarizeRemoteTasks(getFilteredRemoteTasks());
  return {
    tasks: summary.tasks + remoteSummary.tasks,
    episodes: summary.episodes + remoteSummary.episodes,
    frames: summary.frames,
    durationSeconds: summary.durationSeconds + remoteSummary.durationSeconds
  };
}

function getFilteredRecords() {
  const query = browserState.search.trim().toLowerCase();
  return records.filter(({ task, demo }) => {
    const text = [
      demo.id,
      demo.collector,
      task.id,
      task.taskId,
      task.title,
      task.slug,
      task.category,
      task.scene,
      task.source,
      demo.status,
      task.objects.join(" ")
    ].join(" ").toLowerCase();
    const matchesSearch = !query || text.includes(query);
    const matchesCategory = browserState.category === "all" || task.category === browserState.category;
    const matchesDifficulty = browserState.difficulty === "all" || String(task.difficulty) === browserState.difficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
}

function getPageRecords(filteredRecords) {
  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / browserState.pageSize));
  browserState.page = Math.min(browserState.page, totalPages);
  const start = (browserState.page - 1) * browserState.pageSize;
  return filteredRecords.slice(start, start + browserState.pageSize);
}

function populateCategoryFilter() {
  if (!browserEls.category) return;
  const categories = [...new Set(tasks.map((task) => task.category))].sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    browserEls.category.appendChild(option);
  });
}

function renderChips(container, items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.textContent = String(item).replace(/^#/, "");
    container.appendChild(chip);
  });
}

function selectRecord(recordId) {
  browserState.selectedRecordId = recordId;
  renderRecordTable();
  renderRecordDetail();
}

function renderRecordTable() {
  if (!browserEls.taskList) return;
  const filtered = getFilteredRecords();
  const totalPages = Math.max(1, Math.ceil(filtered.length / browserState.pageSize));
  const pageRecords = getPageRecords(filtered);

  if (!filtered.some((record) => record.id === browserState.selectedRecordId)) {
    browserState.selectedRecordId = filtered[0]?.id || null;
  }

  browserEls.taskList.innerHTML = "";
  pageRecords.forEach(({ task, demo, id }) => {
    const row = document.createElement("tr");
    row.className = `task-row${id === browserState.selectedRecordId ? " is-selected" : ""}`;
    row.tabIndex = 0;
    row.setAttribute("aria-selected", String(id === browserState.selectedRecordId));
    row.dataset.recordId = id;
    row.innerHTML = `
      <td class="task-cell">
        <strong>${task.title}</strong>
        <span>${task.scene}</span>
      </td>
      <td>${task.category}</td>
      <td>${demo.collector}</td>
      <td>${formatFrameValue(demo)}</td>
      <td>${demo.duration}</td>
    `;
    row.addEventListener("click", () => selectRecord(id));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRecord(id);
      }
    });
    browserEls.taskList.appendChild(row);
  });

  const filteredSummary = summarizeVisibleScope(filtered);

  if (browserEls.visibleTaskCount) {
    browserEls.visibleTaskCount.textContent = formatNumber(pageRecords.length);
  }
  if (browserEls.visibleTaskLabel) {
    browserEls.visibleTaskLabel.textContent = `visible on this page of ${formatNumber(filtered.length)}`;
  }
  if (browserEls.pageLabel) {
    browserEls.pageLabel.textContent = `Page ${browserState.page} of ${totalPages}`;
  }
  if (browserEls.filteredRecords) browserEls.filteredRecords.textContent = formatNumber(filteredSummary.episodes);
  if (browserEls.visibleDuration) browserEls.visibleDuration.textContent = formatDuration(filteredSummary.durationSeconds);
  if (browserEls.filteredTasks) browserEls.filteredTasks.textContent = formatNumber(filteredSummary.tasks);
  if (browserEls.prevPage) browserEls.prevPage.disabled = browserState.page <= 1;
  if (browserEls.nextPage) browserEls.nextPage.disabled = browserState.page >= totalPages;
}

function getSelectedRecord() {
  return records.find((record) => record.id === browserState.selectedRecordId) || records[0];
}

function getDemoVideoSource(demo) {
  return demo.video?.[browserState.cameraView] || demo.video?.thirdPerson || demo.video?.wrist || "";
}

function updateCameraToggle(demo) {
  if (!browserEls.cameraToggle) return;
  browserEls.cameraToggle.querySelectorAll("[data-camera-view]").forEach((button) => {
    const view = button.dataset.cameraView;
    const hasView = Boolean(demo.video?.[view]);
    button.disabled = !hasView;
    button.classList.toggle("is-active", hasView && view === browserState.cameraView);
  });
}

function updateDetailVideo(demo) {
  if (!browserEls.detailVideo) return;
  const source = browserEls.detailVideo.querySelector("source");
  const nextSource = getDemoVideoSource(demo);
  if (!source || !nextSource) return;
  if (source.getAttribute("src") !== nextSource) {
    source.setAttribute("src", nextSource);
    browserEls.detailVideo.load();
  }
}

function renderRecordDetail() {
  const selected = getSelectedRecord();
  if (!selected) return;
  const { task, demo } = selected;
  const cleaning = demo.cleaning || task.cleaning || {};
  const localStats = getTaskLocalStats(task);
  const viewAvailable = Boolean(demo.video?.[browserState.cameraView]);
  if (!viewAvailable) browserState.cameraView = demo.video?.thirdPerson ? "thirdPerson" : "wrist";

  updateDetailVideo(demo);
  updateCameraToggle(demo);

  browserEls.detailKicker.textContent = `${task.id} / ${demo.status}`;
  browserEls.detailTitle.textContent = task.title;
  browserEls.detailRecordId.textContent = demo.id;
  browserEls.detailDescription.textContent = task.description;

  browserEls.taskSummary.innerHTML = `
    <div><span>Preview Duration</span><strong>${demo.duration}</strong></div>
    <div><span>Preview Frames</span><strong>${formatFrameValue(demo)}</strong></div>
    <div><span>Category</span><strong>${task.category}</strong></div>
    <div><span>Scene</span><strong>${task.scene}</strong></div>
    <div><span>Episode</span><strong>${String(demo.sourceEpisodeIndex).padStart(3, "0")}</strong></div>
    <div><span>Views</span><strong>${demo.cameraViews.length}</strong></div>
    <div><span>Local Demos</span><strong>${formatNumber(localStats.episodes || cleaning.cleanEpisodes || 0)}</strong></div>
    <div><span>Local Duration</span><strong>${formatDuration(localStats.durationSeconds || 0)}</strong></div>
  `;

  renderChips(browserEls.detailTags, task.objects);
}

function applyFilters() {
  browserState.search = browserEls.search?.value || "";
  browserState.category = browserEls.category?.value || "all";
  browserState.difficulty = browserEls.difficulty?.value || "all";
  browserState.page = 1;
  renderRecordTable();
  renderRecordDetail();
}

function setupPagination() {
  browserEls.prevPage?.addEventListener("click", () => {
    browserState.page = Math.max(1, browserState.page - 1);
    renderRecordTable();
  });
  browserEls.nextPage?.addEventListener("click", () => {
    browserState.page += 1;
    renderRecordTable();
  });
}

function setupCameraToggle() {
  browserEls.cameraToggle?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-camera-view]");
    if (!button || button.disabled) return;
    browserState.cameraView = button.dataset.cameraView;
    renderRecordDetail();
  });
}

function setupFilters() {
  browserEls.applyFilters?.addEventListener("click", applyFilters);
  [browserEls.category, browserEls.difficulty].forEach((field) => {
    field?.addEventListener("change", applyFilters);
  });
  browserEls.search?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applyFilters();
  });
}

function initializeBrowser() {
  const totalEpisodes =
    sourceSummary.combinedStats?.trajectories ||
    sourceSummary.localDemoStats?.episodes ||
    sourceSummary.demoRecords ||
    records.length;
  const totalTasks =
    sourceSummary.combinedStats?.tasks ||
    sourceSummary.localDemoStats?.representedTasks ||
    sourceSummary.cleanExportedTasks ||
    tasks.length;
  const totalDuration = sourceSummary.combinedStats?.durationSeconds || sourceSummary.localDemoStats?.durationSeconds || 0;
  startHeroStatCountUps(totalEpisodes, totalDuration, totalTasks);
  populateCategoryFilter();
  setupFilters();
  setupPagination();
  setupCameraToggle();
  renderRecordTable();
  renderRecordDetail();
}

initializeBrowser();
