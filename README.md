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

## Files

```text
index.html                    Main page
style.css                     Website styling
script.js                     TOC highlight + BibTeX copy button
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
