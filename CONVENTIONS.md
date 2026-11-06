# Site conventions

These rules come from Sébastien and apply to every change to this site.

## 1. Separation of concerns

- **HTML is for structure only.** Semantic, accessible HTML5. No inline styles (`style="…"`), no presentational tags (`<center>`, `<font>`, `<b>`). Use `<strong>` and `<em>` when emphasis carries meaning.
- **CSS is for styling only.** All styling lives in external `.css` files under `src/assets/css/`, written with BEM class names (`block__element--modifier`). Style classes, not bare elements, except in `base.css`. One exception: Markdown content cannot carry classes, so text inside a `.prose` container (case-study bodies) is styled with contextual selectors such as `.prose h2`, kept in `prose.css`.
- **JavaScript is for behaviour only.** All logic lives in external `.js` files under `src/assets/js/`. No inline handlers (`onclick="…"`); use event delegation where it fits. Add JavaScript only when a behaviour needs it. The site must work without it.

## 2. Files and folders

```
src/
  _data/            site-wide data (site.json, work.json)
  _includes/
    layouts/        page shells (base.njk)
    partials/       shared pieces (site-header.njk, site-footer.njk)
  assets/
    css/            tokens.css, base.css, layout.css, components.css, prose.css
    js/             one file per behaviour, kebab-case (none needed yet)
    images/         kebab-case; photos in .webp and .jpg at two widths, diagrams in .svg
    docs/           downloadable PDFs
  work/             one Markdown file per case study
  index.njk         homepage
eleventy.config.js  build configuration
wrangler.jsonc      Cloudflare hosting configuration
```

- Lowercase kebab-case for every file and folder.
- Relative paths for every image, script and stylesheet.

## 3. Codebase health

- **No duplication.** Shared markup goes in a partial; repeated content goes in `_data`; repeated values go in `tokens.css`.
- **No monolithic files.** When a CSS or JS file grows past roughly 300 lines, split it by feature.
- **Push back on bad practice.** A requested change that breaks these rules gets a short explanation and a compliant alternative.

## 4. Performance and accessibility

- CSS in the `<head>`. Scripts deferred (`<script src defer>`).
- WCAG 2.2 AA: meaningful `alt` text, one `<h1>` per page and no skipped heading levels, visible focus, 4.5:1 text contrast, 44px tap targets, reduced-motion support. ARIA only where native HTML cannot express the meaning.
- Images: `width` and `height` set, responsive `srcset`, WebP with JPG fallback, `loading="lazy"` below the fold.
- Diagrams: standalone SVG files loaded with `<img>`, so their `<style>` block is the file's own stylesheet, not inline styling in the page. Colours match `tokens.css`; the full description goes in the alt text.
- Every page has a unique `<title>` and meta description.

## 5. How changes are delivered

- State the exact file path of every file changed.
- Change only what is needed; don't rewrite unchanged files.
- Briefly justify structural decisions against the rules above.

## Why Eleventy

Rule 3 forbids repeated HTML boilerplate, and plain HTML pages would each repeat the header and footer. Eleventy assembles pages from the shared partials at build time and outputs plain static HTML, with no client-side framework.

## CSS file roles

- `tokens.css`: design tokens (colour, type, spacing). The only place raw values live.
- `base.css`: element defaults, focus style, skip link, reduced motion.
- `layout.css`: page regions and structural patterns (container, grids, section spacing).
- `components.css`: the look of each BEM block (type, colour, borders).
- `prose.css`: typography for rendered Markdown inside `.prose`.
