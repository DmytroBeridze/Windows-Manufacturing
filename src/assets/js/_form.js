const form = (modalState) => {
  const URL = "https://test-key-d6afb-default-rtdb.firebaseio.com/test.json",
    forms = document.querySelectorAll("form"),
    nameInput = document.querySelectorAll("[name=user_name]"),
    phoneInput = document.querySelectorAll("[name=user_phone]");

  // --------------------------status mesage
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("status");
  const stausMessage = {
    load: "Йде відправка даних",
    success: "Ми скоро зв'яжемося з вами",
    fail: "Щось пішло не так",
  };

  // ------------------------fetch
  const formRequest = async (url, data) => {
    // staus message
    messageContainer.textContent = stausMessage.load;
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
  // ----------------------disapear placeholders

  // document.querySelectorAll("input").forEach((elem) => {
  //   elem.addEventListener("focus", () => {
  //     elem.placeholder = "";
  //   });
  // });

  // ----------------------form
  forms.forEach((elem) => {
    elem.addEventListener("submit", (e) => {
      e.preventDefault();
      elem.appendChild(messageContainer);
      let formData = new FormData(elem);

      // -------order calculator data
      if (
        (elem.parentNode.classList = "calculation__order-popup popup__style")
      ) {
        for (let key in modalState) {
          formData.set(key, modalState[key]);
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
          messageContainer.textContent = stausMessage.success;
        })
        .catch(() => {
          // status message
          messageContainer.textContent = stausMessage.fail;
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
