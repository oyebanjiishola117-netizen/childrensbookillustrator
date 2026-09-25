# Add the 9 uploaded illustrations to the portfolio

## What changes
- All 9 images go into the gallery, with a short title and a one-line caption that describes only what's in the picture (no made-up book titles or clients).
- Grouped as two story sequences plus one standalone piece:
  - **The Cloud Boy** (5 scenes): boy at the window, looking up at the cloud, reaching for it under the oak tree, running through the meadow. Category: Interior Scenes.
  - **The Secret Forest** (4 scenes): child looking into the old forest, the glowing path, kneeling at the tree door, opening the door. Category: Interior Scenes.
  - **Macaw on a branch**: Category: Character Design.
- Featured (shown first and bigger): the door opening, running through the meadow, and the macaw.
- The top of the page uses "opening the secret door" as the main image.
- Filter buttons for categories with no pictures yet (Book Covers, Sketches, Coloring Book Covers) get hidden until work is added.
- The portrait frame on the About section stays empty — no portrait was attached.

## Still needed from you
- Your portrait photo.
- Real titles if these scenes belong to named books (I'll use plain descriptive ones for now).

## Technical details
- Upload each file via `lovable-assets create` from /mnt/user-uploads into `src/assets/portfolio/*.asset.json`.
- Populate `portfolioItems` in `src/data/portfolio.ts` with `src: asset.url`, descriptive alt text.
- Gallery filters derive from categories actually present in items.
- Hero in `src/routes/index.tsx` imports the door-opening asset.
