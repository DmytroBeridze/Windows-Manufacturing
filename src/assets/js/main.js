import main_icons_module from "./_main_icons_module";
import form from "./form";
import staticForm from "./_static_form";
import modal from "./_modal";
import slider from "./_slider";
import glazing_tabs from "./_glazing_tabs";
import orderCalculator from "./orderCalculator";
import galery from "./galery";
import timer from "./timer";
import translate from "./translate";

window.addEventListener("DOMContentLoaded", () => {
  translate();

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

  let decorationState = {};
  let modalState = {};

  glazing_tabs(decorationState);
  orderCalculator(modalState);
  form(modalState, decorationState);
  galery();
  timer("2023-11-09");

  // orderCalculator(windowForm, "click", "window-form");
});
