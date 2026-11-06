// Marks the main-nav link for the in-page section in view (Work on the homepage,
// Contact in the footer) with aria-current="location", so the orange marker
// follows the reader as they scroll or jump. Page links are marked in the HTML.
(() => {
  const links = Array.from(document.querySelectorAll('.site-nav__link[href^="#"]'));
  if (!("IntersectionObserver" in window) || links.length === 0) return;

  const targets = links
    .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
    .filter(({ section }) => section);
  const inView = new Set();

  const update = () => {
    // The footer wins when it is on screen; otherwise the section in the middle band.
    const active = targets.findLast(({ section }) => inView.has(section));
    for (const { link } of targets) {
      if (active && link === active.link) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  };

  const track = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) inView.add(entry.target);
      else inView.delete(entry.target);
    }
    update();
  };

  // Sections count as current when they cross the middle of the screen; the footer as soon as it shows.
  const sectionObserver = new IntersectionObserver(track, { rootMargin: "-45% 0px -45% 0px" });
  const footerObserver = new IntersectionObserver(track);
  for (const { section } of targets) {
    (section.tagName === "FOOTER" ? footerObserver : sectionObserver).observe(section);
  }
})();
