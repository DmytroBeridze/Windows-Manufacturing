const toggleThemeModule = () => {
  const toggleBtn = document.querySelector(".toggle-theme"),
    themeLink = document.querySelector(".toggleThemeLink"),
    phoneIcon = document.querySelector(".phone-icon img"),
    lang = location.hash.substring(1);

  let translate = {
    day: {
      ua: "День",
      en: "Day",
    },
    night: {
      ua: "Ніч",
      en: "Night",
    },
  };

  toggleBtn.addEventListener("click", () => {
    if (localStorage.getItem("theme") == "dark") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
    }
    addDarkTheme();
  });

  const addDarkTheme = () => {
    if (localStorage.getItem("theme") == "dark") {
      themeLink.setAttribute("href", "./dark-theme.css");
      phoneIcon.setAttribute("src", "./img/toggle_theme/white_phone_icon.svg");
      toggleBtn.innerText = translate.day[lang];
    } else {
      themeLink.setAttribute("href", "./style.css");
      phoneIcon.setAttribute("src", "./img/header/black_phone_icon.svg");
      toggleBtn.innerText = translate.night[lang];
    }
  };

  addDarkTheme();
};
export default toggleThemeModule;
