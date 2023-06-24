const staticForm = () => {
  let lang = location.hash.substring(1);
  const titles = [
    {
      ua: {
        header: "Запишіться сьогодні на",
        span: "БЕЗКОШТОВНИЙ ЗАМІР",
        button: "викликати замірника",
        close: `<div class="popup__close-button" style="display:none;"></div>`,
      },
      en: {
        header: "Sign up today at",
        span: "FREE MEASUREMENT",
        button: "call the tester",
        close: `<div class="popup__close-button" style="display:none;"></div>`,
      },
    },
    {
      ua: {
        header: "Запишіться сьогодні на",
        span: "БЕЗКОШТОВНИЙ ЗАМІР",
        button: "викликати замірника",
        close: `<div class="popup__close-button">
          <svg width="35px" height="35px" viewBox="0 0 35 35">
            <path
              d="M30.721 6.774l-9.197 9.253 9.197 9.198c0.385 0.384 0.385 1.007 0 1.392l-4.176 4.175c-0.383 0.385-1.006 0.385-1.391 0l-9.182-9.182-9.127 9.182c-0.384 0.385-1.007 0.385-1.392 0l-4.175-4.175c-0.384-0.385-0.384-1.008 0-1.392l9.127-9.182-9.126-9.126c-0.384-0.384-0.384-1.007 0-1.392l4.175-4.175c0.384-0.385 1.007-0.385 1.392 0l9.11 9.11 9.199-9.253c0.385-0.385 1.008-0.385 1.391 0l4.176 4.175c0.383 0.385 0.383 1.008-0.001 1.392z"
            ></path>
          </svg>
        </div>`,
      },
      en: {
        header: "Sign up today at",
        span: "FREE MEASUREMENT",
        button: "call the tester",
        close: `<div class="popup__close-button">
          <svg width="35px" height="35px" viewBox="0 0 35 35">
            <path
              d="M30.721 6.774l-9.197 9.253 9.197 9.198c0.385 0.384 0.385 1.007 0 1.392l-4.176 4.175c-0.383 0.385-1.006 0.385-1.391 0l-9.182-9.182-9.127 9.182c-0.384 0.385-1.007 0.385-1.392 0l-4.175-4.175c-0.384-0.385-0.384-1.008 0-1.392l9.127-9.182-9.126-9.126c-0.384-0.384-0.384-1.007 0-1.392l4.175-4.175c0.384-0.385 1.007-0.385 1.392 0l9.11 9.11 9.199-9.253c0.385-0.385 1.008-0.385 1.391 0l4.176 4.175c0.383 0.385 0.383 1.008-0.001 1.392z"
            ></path>
          </svg>
        </div>`,
      },
    },
    {
      ua: {
        header: "Введіть ваші дані",
        span: "та натисніть замовити дзвінок",
        button: "замовити дзвінок",
        close: `<div class="popup__close-button">
        <svg width="35px" height="35px" viewBox="0 0 35 35">
          <path
            d="M30.721 6.774l-9.197 9.253 9.197 9.198c0.385 0.384 0.385 1.007 0 1.392l-4.176 4.175c-0.383 0.385-1.006 0.385-1.391 0l-9.182-9.182-9.127 9.182c-0.384 0.385-1.007 0.385-1.392 0l-4.175-4.175c-0.384-0.385-0.384-1.008 0-1.392l9.127-9.182-9.126-9.126c-0.384-0.384-0.384-1.007 0-1.392l4.175-4.175c0.384-0.385 1.007-0.385 1.392 0l9.11 9.11 9.199-9.253c0.385-0.385 1.008-0.385 1.391 0l4.176 4.175c0.383 0.385 0.383 1.008-0.001 1.392z"
          ></path>
        </svg>
      </div>`,
      },
      en: {
        header: "Enter your details",
        span: "and click order call",
        button: "order a call",
        close: `<div class="popup__close-button">
        <svg width="35px" height="35px" viewBox="0 0 35 35">
          <path
            d="M30.721 6.774l-9.197 9.253 9.197 9.198c0.385 0.384 0.385 1.007 0 1.392l-4.176 4.175c-0.383 0.385-1.006 0.385-1.391 0l-9.182-9.182-9.127 9.182c-0.384 0.385-1.007 0.385-1.392 0l-4.175-4.175c-0.384-0.385-0.384-1.008 0-1.392l9.127-9.182-9.126-9.126c-0.384-0.384-0.384-1.007 0-1.392l4.175-4.175c0.384-0.385 1.007-0.385 1.392 0l9.11 9.11 9.199-9.253c0.385-0.385 1.008-0.385 1.391 0l4.176 4.175c0.383 0.385 0.383 1.008-0.001 1.392z"
          ></path>
        </svg>
      </div>`,
      },
    },
    {
      ua: {
        header: "Дякуємо за звернення!",
        span: "Залиште ваші дані",
        button: "розрахувати вартість",
        close: `<div class="popup__close-button">
        <svg width="35px" height="35px" viewBox="0 0 35 35">
          <path
            d="M30.721 6.774l-9.197 9.253 9.197 9.198c0.385 0.384 0.385 1.007 0 1.392l-4.176 4.175c-0.383 0.385-1.006 0.385-1.391 0l-9.182-9.182-9.127 9.182c-0.384 0.385-1.007 0.385-1.392 0l-4.175-4.175c-0.384-0.385-0.384-1.008 0-1.392l9.127-9.182-9.126-9.126c-0.384-0.384-0.384-1.007 0-1.392l4.175-4.175c0.384-0.385 1.007-0.385 1.392 0l9.11 9.11 9.199-9.253c0.385-0.385 1.008-0.385 1.391 0l4.176 4.175c0.383 0.385 0.383 1.008-0.001 1.392z"
          ></path>
        </svg>
      </div>`,
      },
      en: {
        header: "Thank you for your request!",
        span: "Leave your details",
        button: "calculate the cost",
        close: `<div class="popup__close-button">
        <svg width="35px" height="35px" viewBox="0 0 35 35">
          <path
            d="M30.721 6.774l-9.197 9.253 9.197 9.198c0.385 0.384 0.385 1.007 0 1.392l-4.176 4.175c-0.383 0.385-1.006 0.385-1.391 0l-9.182-9.182-9.127 9.182c-0.384 0.385-1.007 0.385-1.392 0l-4.175-4.175c-0.384-0.385-0.384-1.008 0-1.392l9.127-9.182-9.126-9.126c-0.384-0.384-0.384-1.007 0-1.392l4.175-4.175c0.384-0.385 1.007-0.385 1.392 0l9.11 9.11 9.199-9.253c0.385-0.385 1.008-0.385 1.391 0l4.176 4.175c0.383 0.385 0.383 1.008-0.001 1.392z"
          ></path>
        </svg>
      </div>`,
      },
    },
  ];

  const renderForm = (containerSelector, index) => {
    console.log(titles[index][lang]);
    const container = document.querySelector(containerSelector),
      windowForm = `${titles[index][lang].close}
     <form class="modal-window">
<h3 class="modal__title">
  ${titles[index][lang].header}
  <span>${titles[index][lang].span}</span>
</h3>

<input
  name="user_name"
  class="modal__input"
  type="text"
  placeholder="Введіть ваше ім'я"
  required
/>
<input
  name="user_phone"
  class="modal__input"
  type="text"
  placeholder="Введіть телефон"
  required
/>
<input
  name="submit"
  class="modal__button"
  type="submit"
  value="${titles[index][lang].button}"
/>

<div class="modal__info">Ваші дані конфіденційні</div>
</form>`;

    container.innerHTML = windowForm;
  };

  renderForm(".modal-window__container", 0);
  renderForm(".popup", 1);
  renderForm(".callback-popup", 2);
  renderForm(".decorationTabs__content_form-container", 0);
  renderForm(".calculation__order-popup", 3);
  renderForm(".sale-window__container", 0);
};

export default staticForm;
