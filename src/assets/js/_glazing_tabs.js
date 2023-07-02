import tabs_switching_module from "./_tabs_switching_module";
import modal from "./_modal.js";
import orderDecoration from "./orderDecoration";

const glazing_tabs = (decorationState) => {
  const tabsRender = (containerSelector, URL, activeTabSelector) => {
    const tabsContainer = document.querySelector(containerSelector),
      tabsStructureContainerSelector = containerSelector.replace(/\./, "");

    // hash for language change
    let lang = location.hash.substring(1);

    // translate
    const translate = {
      subtitle: {
        ua: "під ключ із встановленням",
        en: "turnkey installation",
      },
      buttonValue: {
        ua: "Розрахувати вартість",
        en: "Calculate the cost",
      },
    };

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
        if (elem.ua.type == "rise") {
          tabsType.Алюміній = "cold";
        }
        // ---------for change border top radius and color title in block "Скління пластиковими рамками"
        if (elem.ua.type == "plastic") {
          tabsType[elem.title] = "warm_plastic";
        }
        const tabsStructure = {
          glazingTabs__wrapper: `<div class="glazingTabs-card ${
            tabsType[elem.ua.title]
          }"data-type="${elem.ua.type}">
          <div class="glazingTabs-card__description">
          <h3 class="glazingTabs-card__title ${tabsType[elem.ua.title]}">${
            elem[lang].title
          }</h3>
          <div class="glazingTabs-card__img-wrapper">
            <img
              src="${elem[lang].img}"
              alt="card"
              class="glazingTabs-card__img"
            />
          </div>
          <ul class="glazingTabs-card__description-list">
            <li>${elem[lang].structure_thickness}</li>
            <li>${elem[lang].glazing}</li>
            <li>${elem[lang].thermal_insulation}</li>
            <li>${elem[lang].soundproofing}</li>
          </ul>
        </div>
        <div class="glazingTabs-card__price">
          <div class="price-container">
            <h3>${elem[lang].price}</h3>
            <p class="container__subtitle">${translate.subtitle[lang]}</p>
          </div>
          <input
            name="button"
            class=" modal__button calculation__button"
            type="button"
            value="${translate.buttonValue[lang]}"
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
            elem[lang].descriptionCard.forEach((elem) => {
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
      // --------------decoration order
      orderDecoration(decorationState);
    };
    glazingFetch();
  };

  tabsRender(".decorationTabs__content", "./api/decorationTabs.json");
  tabsRender(".glazingTabs__wrapper", "./api/glazing_tabs_data.json");
};
export default glazing_tabs;
