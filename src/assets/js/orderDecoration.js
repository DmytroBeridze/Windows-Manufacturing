const orderDecoration = (decorationState) => {
  const order = (containerSelector, elementsSelector, name) => {
    const container = document.querySelectorAll(containerSelector),
      elements = document.querySelectorAll(elementsSelector),
      targetSelector = elementsSelector.replace(/\./, ""),
      decorationElements = document.querySelectorAll(
        ".decoration__slider_card"
      );

    // first element data default
    decorationState.decorationType =
      decorationElements[0].firstElementChild.textContent;

    container.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (
          e.target.classList.contains(targetSelector) ||
          e.target.parentNode.classList.contains(targetSelector) ||
          e.target.parentNode.parentNode.classList.contains(targetSelector)
        ) {
          elements.forEach((elem) => {
            elem.firstElementChild.classList.remove("content-active");
            if (
              e.target == elem ||
              e.target.parentNode == elem ||
              e.target.parentNode.parentNode == elem
            ) {
              if (elem.classList.contains("decoration__slider_card")) {
                decorationState[name] = elem.firstElementChild.textContent;
              } else {
                decorationState[name] =
                  elem.firstElementChild.nextElementSibling.textContent;
                elem.firstElementChild.classList.add("content-active");
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
};

export default orderDecoration;
