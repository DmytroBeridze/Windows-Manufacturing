import tabs_switching_module from "./_tabs_switching_module";

const glazing_tabs = () => {
  const tabsRender = (container) => {
    const tabsContainer = document.querySelector(container);

    const glazingFetch = async () => {
      const request = await fetch("./api/glazing_tabs_data.json");
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

        let tabsCard = `<div class="glazingTabs-card ${
          tabsType[elem.title]
        }"data-type="${elem.type}">
<div class="glazingTabs-card__description">
  <h3 class="glazingTabs-card__title ${tabsType[elem.title]}" >${
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
    class="modal__button"
    type="button"
    value="Розрахувати вартість"
  />
</div>`;

        tabsContainer.innerHTML += tabsCard;
      });
      // --------------Active tabs
      const activeTabs = document.querySelectorAll(
        ".glazingTabs-card[data-type='wood']"
      );
      activeTabs.forEach((elem) => {
        elem.style.display = "flex";
      });
      // --------------tabs switching
      tabs_switching_module();
    };

    glazingFetch();
  };

  tabsRender(".glazingTabs__wrapper");
};
export default glazing_tabs;
