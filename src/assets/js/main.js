import main_icons_module from "./main_icons_module";
import form from "./form";
import staticForm from "./static_form";
import modal from "./modal";
import slider from "./slider";
import glazing_tabs from "./glazing_tabs";
import orderCalculator from "./orderCalculator";
import galery from "./galery";
import timer from "./timer";
import translate from "./translate";
import toggleThemeModule from "./toggle_theme_module";

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
  toggleThemeModule();
});
