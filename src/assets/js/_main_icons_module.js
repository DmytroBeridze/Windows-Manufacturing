const main_icons_module = () => {
  const mainIconsTitles = [
    "висока якість",
    "швидкий монтаж",
    "гарантія 3 роки",
    "вивіз сміття",
  ];

  const mainIcons = {
    "висока якість": "quality",
    "швидкий монтаж": "time",
    "гарантія 3 роки": "quality1",
    "вивіз сміття": "delivery",
  };

  class Main_icons_module {
    constructor(data, icons, containerSelector) {
      this.containerSelector = containerSelector;
      this.data = data;
      this.icons = icons;
    }

    renderIcon() {
      const mainInfoOptions = document.querySelector(this.containerSelector);
      this.data.forEach((element) => {
        let iconsBlock = `<div class="options__icon-container">
            <img src="./img/main/icons/${this.icons[element]}.png" alt="option">
            <div class="options__icon_title" >
            ${element} 
            </div>
            </div>`;

        mainInfoOptions.innerHTML += iconsBlock;
      });
    }
  }

  let testOne = new Main_icons_module(
    mainIconsTitles,
    mainIcons,
    ".main__info_options"
  );
  testOne.renderIcon();
};
export default main_icons_module;
