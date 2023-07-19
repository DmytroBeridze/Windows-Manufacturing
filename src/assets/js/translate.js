import langArr from "./translateArr";
import translateCard from "./translateCardPage";

const translate = () => {
  const langSelect = document.querySelector(".header__language");
  // const lang = ["#ua", "#en"];

  langSelect.addEventListener("change", () => {
    let langValue = langSelect.value;
    localStorage.setItem("lang", langValue);
    location.href = location.pathname + "#" + localStorage.getItem("lang");
    // location.href = location.pathname + "#" + langValue;
    location.reload();
  });
  const langChange = () => {
    // let hash = location.hash.substring(1);
    // langSelect.value = hash;
    location.href = location.pathname + "#" + localStorage.getItem("lang");
    let hash = location.hash.substring(1);
    langSelect.value = hash;

    if (!localStorage.getItem("lang")) {
      location.href = location.pathname + "#ua";
      localStorage.setItem("lang", "ua");
      // location.href = location.pathname + "#" + localStorage.getItem("lang");
      location.reload();

      // let hash = location.hash.substring(1);
      // langSelect.value = hash;
      // if (!lang.includes(location.hash)) {
      //   location.href = location.pathname + "#en";
      //   // location.href = location.pathname + "#" + localStorage.getItem("lang");
      //   location.reload();
    }
    // !------start------------
    let currentTranslateObj = {};
    // console.log(window.location.pathname);
    switch (window.location.pathname) {
      case "/":
        currentTranslateObj = langArr;
        break;
      case "/card.html":
        currentTranslateObj = translateCard;
        break;
    }
    for (let key in currentTranslateObj) {
      document.querySelector(`.${key}`).innerHTML =
        currentTranslateObj[key][hash];
    }
    // !------end------------
    // for (let key in langArr) {
    //   document.querySelector(`.${key}`).innerHTML = langArr[key][hash];
    // }
  };
  langChange();
};
export default translate;
