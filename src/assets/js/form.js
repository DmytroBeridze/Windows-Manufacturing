const form = (modalState, decorationState) => {
  const URL = "https://test-key-d6afb-default-rtdb.firebaseio.com/test.json",
    forms = document.querySelectorAll("form"),
    nameInput = document.querySelectorAll("[name=user_name]"),
    phoneInput = document.querySelectorAll("[name=user_phone]");
  // --------------------------status mesage
  let lang = location.hash.substring(1);

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("status");
  const stausMessage = {
    load: {
      ua: "Йде відправка даних",
      en: "Sending data",
    },
    success: {
      ua: "Ми скоро зв'яжемося з вами",
      en: "We will contact you soon",
    },
    fail: {
      ua: "Щось пішло не так",
      en: "Something went wrong",
    },
  };

  // ------------------------fetch
  const formRequest = async (url, data) => {
    // staus message
    messageContainer.textContent = stausMessage.load[lang];
    const request = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await request.json();
    return response;
  };
  // -------------------------check phone input
  phoneInput.forEach((elem) => {
    elem.addEventListener("input", () => {
      elem.value = elem.value.replace(/\D/, "");
    });
  });

  // ----------------------form
  forms.forEach((elem) => {
    elem.addEventListener("submit", (e) => {
      e.preventDefault();
      elem.appendChild(messageContainer);
      let formData = new FormData(elem);

      // -------order calculator data
      if (elem.parentNode.classList.contains("calculation__order-popup")) {
        for (let key in modalState) {
          formData.set(key, modalState[key]);
        }
      }
      // -------order decoration data
      if (elem.parentNode.matches(".decorationTabs__content_form-container")) {
        for (let key in decorationState) {
          formData.set(key, decorationState[key]);
        }
      }
      let userData = Object.fromEntries(formData);
      formRequest(URL, userData)
        .then(() => {
          // clear inputs
          nameInput.forEach((elem) => {
            elem.value = "";
            // elem.placeholder = "Введіть ваше ім'я";
          });
          phoneInput.forEach((elem) => {
            elem.value = "";
            // elem.placeholder = "Введіть телефон";
          });

          // staus message
          messageContainer.textContent = stausMessage.success[lang];
        })
        .catch(() => {
          // status message
          messageContainer.textContent = stausMessage.fail[lang];
        })
        .finally(() => {
          // remove status message div
          setTimeout(() => {
            messageContainer.remove();
          }, 3000);
        });
    });
  });
};

export default form;
