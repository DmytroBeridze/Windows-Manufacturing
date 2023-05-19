const modal = (triggerSelector, targetSelector, closeButtonSelector) => {
  const modalWindowToggle = () => {
    const button = document.querySelectorAll(triggerSelector),
      modalWindow = document.querySelector(targetSelector),
      closeButton = document.querySelectorAll(closeButtonSelector);

    const open = () => {
      modalWindow.style.display = "flex";
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      modalWindow.style.display = "none";
      document.body.style.overflow = "auto";
    };

    // button open
    button.forEach((elem) =>
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        open();
      })
    );

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
  modalWindowToggle();

  // modalWindowToggle(
  //   ".header__button",
  //   ".popup__container",
  //   ".popup__close-button"
  // );
  // modalWindowToggle(
  //   ".order-call",
  //   ".callback-popup__container",
  //   ".popup__close-button"
  // );
  //   modalWindowToggle(
  //     ".calculation-cost",
  //     ".callback-popup__container",
  //     ".popup__close-button"
  //   );
  modalWindowToggle(
    ".button-size",
    ".callback-popup__container",
    ".popup__close-button"
  );
};
export default modal;
