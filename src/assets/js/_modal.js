const modal = () => {
  const modalWindowToggle = (
    triggerSelector,
    targetSelector,
    closeButtonSelector
  ) => {
    const button = document.querySelector(triggerSelector),
      modalWindow = document.querySelector(targetSelector),
      closeButton = document.querySelectorAll(closeButtonSelector);
    // popup = document.querySelector(".popup");

    const open = () => {
      modalWindow.style.display = "flex";
    };
    const close = () => {
      modalWindow.style.display = "none";
    };

    // button open
    button.addEventListener("click", (e) => {
      e.preventDefault();
      open();
    });

    // button close
    modalWindow.addEventListener("click", (e) => {
      if (e.target === modalWindow) {
        close();
      }
    });

    closeButton.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        close();
      });
    });
  };

  modalWindowToggle(
    ".header__button",
    ".popup__container",
    ".popup__close-button"
  );
  modalWindowToggle(
    ".order-call",
    ".callback-popup__container",
    ".popup__close-button"
  );
};
export default modal;
