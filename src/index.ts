function highlightElement(el) {
  if (Boolean(el?.style)) {
    el.style.transition = "box-shadow 0.3s ease-in-out";
    el.style.boxShadow = "0 0 10px red";
    setTimeout(() => (el.style.boxShadow = ""), 300);
  }
}

const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === "style") {
      // avoid infinite loop due to observer also makes style changes on highlight
      return;
    }
    console.log("Mutation detected:", mutation);
    highlightElement(mutation.target);
  });
});

observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterData: true,
  characterDataOldValue: true,
});
