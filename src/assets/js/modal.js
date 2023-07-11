import scrollWidthCalc from "./scrollWidthCalc";

const modal = (triggerSelector, targetSelector, closeButtonSelector) => {
  const modalWindowToggle = () => {
    const button = document.querySelectorAll(triggerSelector),
      modalWindow = document.querySelector(targetSelector),
      closeButton = document.querySelectorAll(closeButtonSelector),
      popupContainers = document.querySelectorAll(".popup__container_style"),
      clientWidth = document.documentElement.clientWidth,
      scrollWidth = scrollWidthCalc();

    //---------------- open fnc
    const open = () => {
      // for close other popups
      popupContainers.forEach((elem) => (elem.style.display = "none"));
      // ----//-
      modalWindow.style.display = "flex";
      document.body.style.overflow = "hidden";

      // add margin to body when open popup
      document.body.style.marginRight = `${scrollWidth}px`;
    };
    // -----------------close fnc
    const close = () => {
      modalWindow.style.display = "none";
      document.body.style.overflow = "auto";

      // remove margin to body when open popup
      document.body.style.marginRight = `0px`;
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
      // close window on screen size <= 576
      if (clientWidth <= 576 && e.target === modalWindow) {
        close();
      }
    });

    // close button cross
    closeButton.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        close();
      });
    });

    //delete close button max-width: 576px reload
    const deleteCloseButton = (clientWidth) => {
      if (clientWidth <= 576) {
        closeButton.forEach((elem) => (elem.style.display = "none"));
      } else {
        closeButton.forEach((elem) => (elem.style.display = "block"));
      }
    };
    deleteCloseButton(clientWidth);

    //delete close button max-width: 576px resize
    window.addEventListener("resize", () => {
      let clientWidth = document.documentElement.clientWidth;
      deleteCloseButton(clientWidth);
    });
  };

  modalWindowToggle();
};
export default modal;
