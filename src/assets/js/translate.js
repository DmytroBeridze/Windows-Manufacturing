import langArr from "./translateArr";

const translate = () => {
  const langSelect = document.querySelector(".header__language"),
    lang = ["#ua", "#en"];

  langSelect.addEventListener("change", () => {
    let langValue = langSelect.value;
    location.href = location.pathname + "#" + langValue;
    location.reload();
  });

  const langChange = () => {
    let hash = location.hash.substring(1);
    langSelect.value = hash;
    if (!lang.includes(location.hash)) {
      location.href = location.pathname + "#en";
      location.reload();
    }

    for (let key in langArr) {
      document.querySelector(`.${key}`).innerHTML = langArr[key][hash];
    }
  };
  langChange();

  // add styles after en translate
  window.addEventListener("resize", () => {
    let screenSize = document.documentElement.clientWidth,
      workTime = document.querySelector(".workind-time_description p");
    if (location.hash.substring(1) == "en" && screenSize <= 1230) {
      workTime.style.fontSize = "1.2rem";
    } else workTime.style.fontSize = "1.5rem";
  });
};
export default translate;
