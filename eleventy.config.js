// Eleventy configuration: builds plain static HTML from src/ into _site/.

// Relative path from a page's URL back to the site root ("" for "/", "../../" for "/work/ocsis/").
function relativeRoot(url = "/") {
  const depth = url.split("/").filter(Boolean).length;
  return "../".repeat(depth);
}

// Shared figure wrapper for the photo and diagram shortcodes.
function caseFigure(media, caption) {
  return `<figure class="case-figure">
  ${media}
  <figcaption class="case-figure__caption">${caption}</figcaption>
</figure>`;
}

export default function (eleventyConfig) {
  // Copy static assets through unchanged.
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("relRoot", relativeRoot);

  // Case studies, ordered by the "order" field in each page's front matter.
  eleventyConfig.addCollection("cases", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/work/*.md")
      .sort((a, b) => a.data.order - b.data.order)
  );

  // Captioned responsive figure: WebP with JPG fallback at 800px and a larger width.
  // Usage: {% figure "a320-simulator", "Alt text", "Caption", 800, 600, 1600 %}
  eleventyConfig.addShortcode("figure", function (name, alt, caption, width, height, largeWidth = 1600) {
    const base = `${relativeRoot(this.page.url)}assets/images/${name}`;
    const sizes = "(min-width: 48rem) 44rem, 92vw";
    return caseFigure(`<picture>
    <source type="image/webp" srcset="${base}-800.webp 800w, ${base}-${largeWidth}.webp ${largeWidth}w" sizes="${sizes}">
    <img class="case-figure__image" src="${base}-800.jpg" srcset="${base}-800.jpg 800w, ${base}-${largeWidth}.jpg ${largeWidth}w" sizes="${sizes}" width="${width}" height="${height}" loading="lazy" alt="${alt}">
  </picture>`, caption);
  });

  // Diagrams are SVG files, so they need no raster sizes. The SVG's own
  // stylesheet colours it; the full description lives in the alt text.
  eleventyConfig.addShortcode("diagram", function (name, alt, caption, width, height) {
    const src = `${relativeRoot(this.page.url)}assets/images/${name}.svg`;
    return caseFigure(`<img class="case-figure__image case-figure__image--diagram" src="${src}" width="${width}" height="${height}" loading="lazy" alt="${alt}">`, caption);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
