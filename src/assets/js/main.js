import main_icons_module from "./_main_icons_module";
import form from "./_form";
import staticForm from "./_static_form";
import modal from "./_modal";
import slider from "./_slider";
import glazing_tabs from "./_glazing_tabs";
window.addEventListener("DOMContentLoaded", () => {
  main_icons_module();
  staticForm();
  form();
  modal(".header__button", ".popup__container", ".popup__close-button");
  modal(".order-call", ".callback-popup__container", ".popup__close-button");
  slider();
  glazing_tabs();

  // modal(
  //   ".calculation-cost",
  //   ".callback-popup__container",
  //   ".popup__close-button"
  // );

  // tabs_switching_module();
});
