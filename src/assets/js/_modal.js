const modal = (triggerSelector, targetSelector, closeButtonSelector) => {
  const modalWindowToggle = () => {
    const button = document.querySelectorAll(triggerSelector),
      modalWindow = document.querySelector(targetSelector),
      closeButton = document.querySelectorAll(closeButtonSelector),
      popupContainers = document.querySelectorAll(".popup__container_style");

    //---------------- open fnc
    const open = () => {
      // for close other popups
      popupContainers.forEach((elem) => (elem.style.display = "none"));
      // ----//-
      modalWindow.style.display = "flex";
      document.body.style.overflow = "hidden";
    };
    // -----------------close fnc
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
      if (
        e.target === modalWindow &&
        !e.target.className.includes("calculation-order__container")
      ) {
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
  // modalWindowToggle(
  //   ".calculation__button",
  //   ".callback-popup__container",
  //   ".popup__close-button"
  // );
  // modalWindowToggle(
  //   ".button-size",
  //   ".glazingtype-popup__container",
  //   ".popup__close-button"
  // );
  // modalWindowToggle(
  //   ".glazingtype-button",
  //   ".calculation-order__container",
  //   ".popup__close-button"
  // );
};
export default modal;
