const tabs_switching_module = () => {
  const tabsSwitching = (
    targetContainerSelector,
    targetSelector,
    contentSelector,
    ...obj
  ) => {
    let targetContainer = document.querySelector(targetContainerSelector),
      targetItem = document.querySelectorAll(targetSelector),
      content = document.querySelectorAll(contentSelector);

    // animation class add
    content.forEach((elem) => {
      elem.classList.add("faded");
    });

    // ---------------Show selector object
    // const obj = {
    //   0: "wood",
    //   1: "aluminum",
    //   2: "plastic",
    //   3: "french",
    //   4: "rise",
    // };
    // const obj = ["wood", "aluminum", "plastic", "french", "rise"];

    // ---------------Hide
    const hide = () => {
      content.forEach((elem) => {
        elem.style.display = "none";
      });
      targetItem.forEach((card) => {
        card.classList.remove("border_top");
      });
    };

    // ---------------Show
    const show = (selector) => {
      let showItem = document.querySelectorAll(`[data-type=${obj[selector]}]`);
      showItem.forEach((elem) => (elem.style.display = "flex"));

      targetItem[selector].classList.add("border_top");
    };

    show(0);

    targetContainer.addEventListener("click", (e) => {
      e.preventDefault();

      if (
        e.target.classList.contains(targetSelector.replace(/\./, "")) ||
        e.target.parentNode.classList.contains(targetSelector.replace(/\./, ""))
      ) {
        targetItem.forEach((elem, index) => {
          if (e.target == elem || e.target.parentNode == elem) {
            hide();
            show(index);
          }
        });
      }
    });
  };
  tabsSwitching(
    ".slider__carousel",
    ".slider__card",
    ".glazingTabs-card",

    "wood",
    "aluminum",
    "plastic",
    "french",
    "rise"
  );
  tabsSwitching(
    ".decoration__carousel",
    ".decoration__slider_card",
    ".decorationTabs__card",

    "Interior_decoration",
    "Exterior_decoration",
    "Remote_glazing",
    "Roof_to_balcony"
  );
};
export default tabs_switching_module;
