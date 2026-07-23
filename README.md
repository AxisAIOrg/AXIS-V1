# AXIS Academic Website Scaffold

Static academic project page for:

**AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation**

The structure follows the requested sections:

1. Abstract
2. Scalable Robot Data Collection
3. The AXIS Franka Dataset
4. Experiments
5. BibTeX

The starter style is inspired by VideoMimic's cream-paper academic layout: large serif title, monospace section tags, fixed table of contents on wide screens, rounded media blocks, and horizontal video galleries. The content structure borrows the "living dataset" / dataset snapshot emphasis from EgoVerse.

## Preview locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

No build step is required. This should work directly on GitHub Pages.

## Real-time homepage statistics

The homepage reads `data/realtime-stats.json` and displays:

- verified trajectory count;
- distinct tasks represented by those trajectories;
- summed trajectory duration from `simulation_time_seconds`;
- observed hourly growth for trajectories and duration;
- UTC daily growth for tasks.

`.github/workflows/realtime-stats.yml` runs at minute 17 of every hour (and can
also be run manually). It queries PostgreSQL in a read-only transaction, writes
only the sanitized aggregate JSON to `main` through the GitHub Contents API,
and explicitly requests a GitHub Pages rebuild.

The production path runs entirely on GitHub-hosted infrastructure. It does not
use a developer laptop, a local SSH alias, a VPN session, or a self-hosted
process.

This repository intentionally keeps its existing branch-based Pages setup.
Uploading the entire video-heavy site as a Pages artifact every hour would be
unnecessarily expensive. A `GITHUB_TOKEN` commit does not trigger a Pages build
on its own, so the explicit Pages build request in the workflow is required.

Between snapshots, the browser distributes the latest measured trajectory and
duration increases across seeded pseudo-random event times for exactly one
hour. Independent event times create visible bursts and quiet gaps while
sorting keeps playback monotonic. Those counters start at the previous totals,
finish at the latest totals, and never extrapolate past them. Tasks use the
latest measured total directly because the task catalog updates daily. The
real-time statistics heading sits above the metric cards; trajectories span
the first row, while tasks and trajectory duration share the second row.

Changed digits use upward rolling reels with a short low-to-high stagger,
inspired by live mileage counters. Visitors who prefer reduced motion receive
the same values without the reel animation. Trajectory and duration growth
comes exclusively from the sanitized database delta; no artificial catch-up
amount is added. The one bootstrap-day task estimate is marked explicitly and
is replaced by snapshot-based daily differences from the next UTC date onward.

The current checked-in comparison starts from 1,530,275 trajectories, 1,816
tasks, and 13,645 h 7 m. The initial task badge uses the latest complete UTC
day's increase, `Est. +9 / day`. Starting with the next UTC date, the collector
stores the previous date's last published task total and reports the current
date's non-negative difference. If the prior snapshot is more than six hours
old at the UTC date boundary, the daily badge is hidden instead of labeling a
stale or multi-day increase as one day.
Hourly Actions refreshes replace the trajectory and duration comparison with
the next pair of database snapshots. Public totals are monotonic: metric arrows
show upward growth or a steady value, and database corrections never decrease a
published total.

### Required secret

Add the approved reference-repository connection URL as the repository Actions Secret
`AXIS_STATS_DATABASE_URL`. The collector accepts the reference repository's
`postgresql+psycopg://...` form and requires `sslmode=verify-full`. The workflow
downloads the official AWS RDS global CA bundle, verifies its pinned SHA-256,
passes it to PostgreSQL for certificate and hostname validation, and always
executes the aggregate query inside a read-only transaction.

After configuring the Secret, run **Actions → Refresh real-time statistics →
Run workflow** once. The checked-in database baseline lets this first refresh
produce the initial growth rates.

### GitHub-hosted validation

`.github/workflows/checks.yml` downloads only this feature's small test surface
at the event commit and runs the Python and JavaScript tests on a GitHub-hosted
runner. It does not clone the video-heavy repository, use database Secrets, or
depend on a developer machine.

## Files

```text
index.html                    Main page
style.css                     Website styling
script.js                     TOC highlight + BibTeX copy button
realtime-stats.js              Hourly snapshot display + live estimation
data/realtime-stats.json       Public sanitized snapshot
scripts/                       Read-only collector + GitHub Pages publisher
.github/workflows/             Hourly statistics automation
.nojekyll                     Makes GitHub Pages serve static files directly
assets/paper/                 PDF copy
assets/placeholders/          SVG placeholders used by the page
assets/media/                 Drop-in MP4 videos
assets/images/                Drop-in final figures/logos/screenshots
```

## Replace placeholders

Suggested media names already referenced as `data-replace-with` hints in `index.html`:

- `assets/media/hero-teaser.mp4`
- `assets/media/collection-demo.mp4`
- `assets/media/augmentation-demo.mp4`
- `assets/media/realworld-rollout.mp4`

To activate a video, replace the corresponding placeholder `<video ...></video>` with:

```html
<video class="hero-video" poster="assets/placeholders/teaser.svg" muted autoplay loop playsinline preload="metadata">
  <source src="assets/media/hero-teaser.mp4" type="video/mp4" />
</video>
```

Suggested figure replacements:

- `assets/placeholders/teaser.svg` → final teaser/system overview
- `assets/placeholders/collection-pipeline.svg` → collection pipeline figure
- `assets/placeholders/dataset-overview.svg` → dataset overview figure
- `assets/placeholders/augmentation-grid.svg` → augmentation diversity figure
- `assets/placeholders/experiments.svg` → results chart
- `assets/placeholders/rollout-gallery.svg` → real-world rollout figure

You can either overwrite the placeholder files with final assets using the same paths, or update the paths in `index.html`.

## Release checklist

- Replace author list and affiliation text in the hero section.
- Update `[dataset]`, `[code]`, and `[platform]` links.
- Replace placeholder SVGs/videos.
- Update BibTeX.
- Confirm whether the paper PDF should be public before deploying.
- Optional: add `CNAME` for a custom domain.
