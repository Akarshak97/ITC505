# Addendum: KGF — Paths of Gold

## Objectives Coverage
- **HTML, CSS, JavaScript basics:** Separate `index.html`, `style.css`, and `script.js` implemented with responsive layout.
- **Event listeners & DOM:** Buttons are created on-the-fly and wired via `addEventListener` to traverse the story graph and re-render sections.
- **Interactive UI:** `render(id)` updates story text, current scene image, and choices; **Restart** returns to the opening node.
- **8+ Endings:** There are twelve distinct endings, each referencing an image in `/assets`.

## Structure & Data Model
- Narrative nodes are stored in a plain JS object: `{ id, title, text, image, choices? }`. Endings add `ending:true`.
- This makes branching easy to read and extend without changing rendering logic.

## Styling Notes
- Minimal, contrasty dark theme with gold accents to echo the mines setting.
- Mobile-first layout switches to a two-column grid on wide screens.

## Footer Requirement
- The assignment's “Last updated” snippet is included verbatim in `index.html` so Canvas can verify timestamps.

## Images
Place images in `/assets/` with the names listed in `assets/IMAGES.md` or adjust paths in `script.js` to match your filenames.

## Testing
- Verified each branch terminates in a valid ending and the “Play again” flow works.
- Added `preloadImages()` to reduce flicker on first display.

## Creative Notes
- This is an original, fictional story **inspired by the Kolar Gold Fields setting**, not a retelling of any specific movie plot or characters.
- You can localize names, add languages, or expand branches by appending new nodes to the `NODES` object.
