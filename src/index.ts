"use strict";

(function initRenderLens(): void {
  function highlightElement(el: Element): void {
    if (!(el instanceof HTMLElement)) return;
    el.animate(
      [
        { boxShadow: "0 0 0px red" },
        { boxShadow: "0 0 10px red" },
        { boxShadow: "0 0 0px red" },
      ],
      { duration: 500, easing: "ease-in-out", fill: "forwards" }
    );
  }

  const observer = new MutationObserver((mutationsList: MutationRecord[]) => {
    for (const mutation of mutationsList) {
      highlightElement(mutation.target as Element);
      console.log("[RenderLens] Mutation detected: ", mutation);
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
  });
})();
