import scrollWidthCalc from "./scrollWidthCalc";

const galery = () => {
  const galeryContainer = document.querySelector(".works__container"),
    galery = document.querySelector(".works__galery"),
    popupContainer = document.createElement("div"),
    bigImg = document.createElement("img"),
    URL = "./api/works_galery.json",
    scrollWidth = scrollWidthCalc();

  popupContainer.classList.add("popup__container_style");
  // popupContainer.style.display = "none";
  bigImg.classList.add("works__galery_bigImg");
  popupContainer.appendChild(bigImg);
  galeryContainer.appendChild(popupContainer);

  // -------------------fetch
  const galleryRequest = async (url) => {
    const request = await fetch(url);
    const responce = await request.json();
    return responce;
  };

  galleryRequest(URL).then((res) => {
    res.forEach((elem) => {
      let { path } = elem;
      const galeryItem = `<li><img src="./${path}" alt="works" /></li>`;
      galery.innerHTML += galeryItem;
    });

    galeryContainer.addEventListener("click", (e) => {
      if (e.target.tagName == "IMG") {
        popupContainer.style.display = "flex";
        document.body.style.overflow = "hidden";

        let path = e.target.getAttribute("src").split("/");
        bigImg.setAttribute(
          "src",
          `./img/our_works/big_img/${path[path.length - 1]}`
        );
        popupContainer.classList.add("works-faded");

        // add margin to body when open popup
        document.body.style.marginRight = `${scrollWidth}px`;
      }

      if (e.target.className.includes("popup__container_style")) {
        popupContainer.style.display = "none";
        document.body.style.overflow = "";

        // remove margin to body when open popup
        document.body.style.marginRight = `0px`;
      }
    });
  });

  // !-------------working
  // const container = document.querySelector(".works"),
  //   bigImgContainer = document.createElement("div"),
  //   bigImg = document.createElement("img");
  // bigImgContainer.classList.add("popup__container_style");
  // container.appendChild(bigImgContainer);
  // bigImgContainer.style.display = "none";
  // container.appendChild(bigImgContainer);
  // bigImg.classList.add("works__galery_bigImg");
  // bigImgContainer.appendChild(bigImg);

  // container.addEventListener("click", (e) => {
  //   if (e.target.tagName == "IMG") {
  //     bigImgContainer.style.display = "flex";
  //     bigImgContainer.classList.add("works-faded");
  //     document.body.style.overflow = "hidden";
  //     let imgPath = e.target.getAttribute("src").split("/");
  //     bigImg.setAttribute(
  //       "src",
  //       `./img/our_works/big_img/${imgPath[imgPath.length - 1]}`
  //     );
  //   }

  //   if (e.target.classList.contains("popup__container_style")) {
  //     bigImgContainer.style.display = "none";
  //     document.body.style.overflow = "";
  //   }
  // });
};
export default galery;
