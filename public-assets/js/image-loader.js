(function () {
  const applyImageDefaults = (img) => {
    if (!(img instanceof HTMLImageElement)) return;
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    if (!img.hasAttribute("fetchpriority")) img.setAttribute("fetchpriority", "low");
  };

  document.querySelectorAll("img").forEach(applyImageDefaults);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLImageElement) applyImageDefaults(node);
        if (node instanceof Element) node.querySelectorAll("img").forEach(applyImageDefaults);
      }
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
