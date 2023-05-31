const orderDecoration = (decorationState) => {
  const order = (containerSelector, elementsSelector, name) => {
    const container = document.querySelectorAll(containerSelector),
      elements = document.querySelectorAll(elementsSelector),
      targetSelector = elementsSelector.replace(/\./, "");
    container.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (
          e.target.classList.contains(targetSelector) ||
          e.target.parentNode.classList.contains(targetSelector) ||
          e.target.parentNode.parentNode.classList.contains(targetSelector)
        ) {
          elements.forEach((elem) => {
            elem.firstElementChild.classList.remove("im");
            if (
              e.target == elem ||
              e.target.parentNode == elem ||
              e.target.parentNode.parentNode == elem
            ) {
              if (elem.classList.contains("decoration__slider_card")) {
                // ! Add first item data default
                decorationState[name] = elem.firstElementChild.textContent;
              } else {
                decorationState[name] =
                  elem.firstElementChild.nextElementSibling.textContent;
                elem.firstElementChild.classList.add("im");
              }
            }
          });
        }
      });
    });
  };

  order(
    ".decorationTabs__content_wrapper",
    ".decorationTabs__content_card",
    "decorationMatherial"
  );
  order(".decoration__carousel", ".decoration__slider_card", "decorationType");

  // order(".decoration__slider_card", "decorationType");
  // order(".decorationTabs__content_card", "decorationMatherial");
};

export default orderDecoration;
