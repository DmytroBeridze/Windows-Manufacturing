import tabs_switching_module from "./_tabs_switching_module";
import modal from "./_modal.js";

const glazing_tabs = () => {
  const tabsRender = (containerSelector, URL, activeTabSelector) => {
    const tabsContainer = document.querySelector(containerSelector),
      tabsStructureContainerSelector = containerSelector.replace(/\./, "");

    const glazingFetch = async () => {
      const request = await fetch(URL);
      const response = await request.json();

      const tabsType = {
        Тепле: "warm",
        Холодне: "cold",
        Пластик: "cold",
        Алюміній: "warm",
        Дерево: "warm",
      };

      response.forEach((elem) => {
        // ---------for change color "aluminum" card in block "Скління з виносом"
        if (elem.type == "rise") {
          tabsType.Алюміній = "cold";
        }
        // ---------for change border top radius and color title in block "Скління пластиковими рамками"
        if (elem.type == "plastic") {
          tabsType[elem.title] = "warm_plastic";
        }

        const tabsStructure = {
          glazingTabs__wrapper: `<div class="glazingTabs-card ${
            tabsType[elem.title]
          }"data-type="${elem.type}">
          <div class="glazingTabs-card__description">
          <h3 class="glazingTabs-card__title ${tabsType[elem.title]}">${
            elem.title
          }</h3>
          <div class="glazingTabs-card__img-wrapper">
            <img
              src="${elem.img}"
              alt="card"
              class="glazingTabs-card__img"
            />
          </div>
          <ul class="glazingTabs-card__description-list">
            <li>${elem.structure_thickness}</li>
            <li>${elem.glazing}</li>
            <li>${elem.thermal_insulation}</li>
            <li>${elem.soundproofing}</li>
          </ul>
        </div>
        <div class="glazingTabs-card__price">
          <div class="price-container">
            <h3>${elem.price}</h3>
            <p>під ключ із встановленням</p>
          </div>
          <input
            name="button"
            class=" modal__button calculation__button"
            type="button"
            value="Розрахувати вартість"
          />
        </div>`,

          decorationTabs__content: `<div class="decorationTabs__card" data-type="${
            elem.name
          }">
            <div class="decorationTabs__img">
              <img src="${elem.img}" />
            </div>
            <div class="decorationTabs__content_wrapper">
            ${internalCards(elem)}
              </div>
          </div>`,
        };

        tabsContainer.innerHTML +=
          tabsStructure[tabsStructureContainerSelector];

        // ------------internal cards in decorationTabs__wrapper
        function internalCards(elem) {
          if (containerSelector == ".decorationTabs__content") {
            let card = "";
            elem.descriptionCard.forEach((elem) => {
              card += `<div class="decorationTabs__content_card">
              <div class="decorationTabs__content_card-img">
                <img src="${elem.descImg}" alt="" />
              </div>
              <h3 class="decorationTabs__content_card-title">${elem.title}</h3>
              <p class="decorationTabs__content_card-price">${elem.price}</p>
              <p class="decorationTabs__content_card-desc">${elem.matherial}</p>
            </div> `;
            });
            return card;
          }
        }
        // ------------// END internal cards in decorationTabs__wrapper------------------------
        // TODO---Чого треба викликати тут чого не можна знайти  об'єкт в іншому місці за селектором------
      });
      // --------------Tabs switching
      tabs_switching_module();
      // --------------glazing modal open
      modal(
        ".calculation__button",
        ".calculation-popup__container",
        ".popup__close-button"
      );
    };
    glazingFetch();
  };

  tabsRender(
    ".glazingTabs__wrapper",
    "./api/glazing_tabs_data.json"
    // ".glazingTabs-card[data-type='wood']"
  );
  // tabsRender(
  //   ".decorationTabs__wrapper",
  //   "./api/decorationTabs.json"
  // );
  tabsRender(".decorationTabs__content", "./api/decorationTabs.json");
};
export default glazing_tabs;
