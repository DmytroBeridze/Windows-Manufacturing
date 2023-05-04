const glazing_tabs = () => {
  const tabsRender = (container) => {
    const tabsContainer = document.querySelector(container);

    const glazingFetch = async () => {
      const request = await fetch("./api/glazing_tabs_data.json");
      const response = await request.json();
      console.log(response[0].wood.cold.img);
      console.log(response);

      let tabsCard = `<div class="glazingTabs-card">
<div class="glazingTabs-card__description">
  
  <h3 class="glazingTabs-card__title">Холодне</h3>
  <div class="glazingTabs-card__img-wrapper">
    <img
      src="${response[0].wood.cold.img}"
      alt="card"
      class="glazingTabs-card__img"
    />
  </div>
  <ul class="glazingTabs-card__description-list">
    <li>Конструктивная толщина 42-58 мм</li>
    <li>Остекление: полированное стекло (толщиной 4 - 5 мм)</li>
    <li>Теплоизоляция: 0,07 м2 * С/Вт</li>
    <li>Звукоизоляция: 20-27 дб</li>
  </ul>
</div>


<div class="glazingTabs-card__price">
  <div class="price-container">
    <h3>2600 руб.кв.м.</h3>
    <p>под ключ с установкой</p>
  </div>
  <input
    name="button"
    class="modal__button"
    type="button"
    value="Розрахувати вартість"
  />
</div>`;

      tabsContainer.innerHTML = tabsCard;
    };
    glazingFetch();
  };

  tabsRender(".glazingTabs__wrapper");
};
export default glazing_tabs;
