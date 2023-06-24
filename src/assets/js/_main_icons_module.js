const main_icons_module = () => {
  let lang = location.hash.substring(1);

  const mainIcons = {
    ua: {
      "висока якість": "quality",
      "швидкий монтаж": "time",
      "гарантія 3 роки": "quality1",
      "вивіз сміття": "delivery",
    },
    en: {
      "high quality": "quality",
      "quick install": "time",
      "warranty 3 years": "quality1",
      "garbage removal": "delivery",
    },
  };

  class Main_icons_module {
    constructor(data, containerSelector) {
      this.containerSelector = containerSelector;
      this.data = data;
    }

    renderIcon() {
      const mainInfoOptions = document.querySelector(this.containerSelector);
      for (let key in this.data[lang]) {
        let iconsBlock = `<div class="options__icon-container">
           <img src="./img/main/icons/${this.data[lang][key]}.png" alt="option">
           <div class="options__icon_title" >
           ${key}
           </div>
           </div>`;
        mainInfoOptions.innerHTML += iconsBlock;
      }
    }
  }

  let testOne = new Main_icons_module(mainIcons, ".main__info_options");
  testOne.renderIcon();
};
export default main_icons_module;
