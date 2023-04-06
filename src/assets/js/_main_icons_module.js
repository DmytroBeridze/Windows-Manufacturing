const main_icons_module = () => {
  const mainInfoOptions = document.querySelector(".main__info_options");

  const mainIconsTitles = {
    quality: {
      1: "висока",
      2: "якість",
    },
  };

  class Main_icons_module {
    constructor(firstData, secondData) {
      this.first = firstData;
      this.second = secondData;
    }

    renderIcon() {
      let iconsBlock = `<div class="options__icon-container">
        <img src="./img/main/icons/quality.png" alt="option">
        <div class="options__icon_title" >
        <span>Висока </span>
        <span>якість </span>
        </div>
        </div>`;

      mainInfoOptions.innerHTML += iconsBlock;
    }
  }

  let testOne = new Main_icons_module(
    mainIconsTitles.quality[1],
    mainIconsTitles.quality[2]
  );
  testOne.renderIcon();

  // !
  //   const mainIconsTitles = {
  //     quality: {
  //       1: "висока",
  //       2: "якість",
  //     },
  //   };

  //   class Main_icons_module {
  //     constructor(firstData, secondData) {
  //       this.first = firstData;
  //       this.second = secondData;
  //     }

  //     renderIcon() {
  //       let iconsBlock = `<div class="options__icon-container">
  //         <img src="./img/main/icons/quality.png" alt="option">
  //         <div class="options__icon_title" >
  //         <span>Висока </span>
  //         <span>якість </span>
  //         </div>
  //         </div>`;

  //       mainInfoOptions.innerHTML += iconsBlock;
  //     }
  //   }

  //   let testOne = new Main_icons_module(
  //     mainIconsTitles.quality[1],
  //     mainIconsTitles.quality[2]
  //   );
  //     testOne.renderIcon();
};

export default main_icons_module;
