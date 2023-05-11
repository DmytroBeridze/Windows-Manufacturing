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
    };

    // ---------------Show
    const show = (selector) => {
      let test = document.querySelectorAll(`[data-type=${obj[selector]}]`);
      test.forEach((elem) => (elem.style.display = "flex"));
    };

    targetContainer.addEventListener("click", (e) => {
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
};
export default tabs_switching_module;
