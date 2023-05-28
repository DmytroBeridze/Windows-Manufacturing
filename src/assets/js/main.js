import main_icons_module from "./_main_icons_module";
import form from "./form";
import staticForm from "./_static_form";
import modal from "./_modal";
import slider from "./_slider";
import glazing_tabs from "./_glazing_tabs";
import orderCalculator from "./orderCalculator";
import galery from "./galery";
window.addEventListener("DOMContentLoaded", () => {
  main_icons_module();
  staticForm();

  modal(".header__button", ".popup__container", ".popup__close-button");
  modal(".order-call", ".callback-popup__container", ".popup__close-button");
  modal(
    ".button-size",
    ".glazingtype-popup__container",
    ".popup__close-button"
  );
  modal(
    ".glazingtype-button",
    ".calculation-order__container",
    ".popup__close-button"
  );

  slider();
  glazing_tabs();

  let modalState = {};
  orderCalculator(modalState);
  form(modalState);
  galery();

  // orderCalculator(windowForm, "click", "window-form");
});
