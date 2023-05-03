const slider = () => {
  const glazingDataURL = "./api/glasing_data.json";
  const sliderCarousel = document.querySelector(".slider__carousel");

  // ----------------------------------fetch
  const glazingFetch = async (url) => {
    const request = await fetch(url);
    const response = await request.json();
    // console.log(response);
    return response;
  };

  // ----------------------------------Render slider
  glazingFetch(glazingDataURL).then((res) => {
    res.forEach((elem) => {
      const { img, title } = elem;

      let slider = `
      <li draggable="false">
      <div class="slider__card">
      <img src=${img} alt="" />
        <a href="#">${title}</a>
      </div>
      </li>
      `;
      sliderCarousel.innerHTML += slider;
    });

    // --------------------------------Arrow
    //!-----------------------------------------
    const sliderArrow = document.querySelectorAll(".slider-arrow");
    const sliderCard = document.querySelector(".slider__card");

    let scrollStop = false;
    let prevPageX;
    let prevScrollLeft;
    let dragCoef;
    let isDragging = false;

    const showHideArrows = () => {
      sliderCarousel.scrollLeft >= sliderCard.clientWidth
        ? (sliderArrow[0].style.display = "block")
        : (sliderArrow[0].style.display = "none");

      sliderCarousel.scrollLeft ==
      sliderCarousel.scrollWidth - sliderCarousel.clientWidth
        ? (sliderArrow[1].style.display = "none")
        : (sliderArrow[1].style.display = "block");
    };

    sliderArrow.forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        showHideArrows();
        arrow.classList == "slider-arrow slider-arrow_left"
          ? (sliderCarousel.scrollLeft -= sliderCard.clientWidth)
          : (sliderCarousel.scrollLeft += sliderCard.clientWidth);
        setTimeout(() => {
          showHideArrows();
        }, 60);
      });
    });

    const autoslide = () => {
      if (
        sliderCarousel.scrollLeft ==
        sliderCarousel.scrollWidth - sliderCarousel.clientWidth
      ) {
        return;
      }

      dragCoef = Math.abs(dragCoef);
      let valueDiff = sliderCard.clientWidth - dragCoef;
      if (sliderCarousel.scrollLeft > prevScrollLeft) {
        return (sliderCarousel.scrollLeft +=
          dragCoef > sliderCard.clientWidth / 3 ? valueDiff : -dragCoef);
      }
      sliderCarousel.scrollLeft -=
        dragCoef > sliderCard.clientWidth / 3 ? valueDiff : -dragCoef;
    };

    // --------------------------------Drag
    const scrollStart = (e) => {
      scrollStop = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = sliderCarousel.scrollLeft;
    };

    const scrollMove = (e) => {
      if (!scrollStop) return;
      e.preventDefault();
      isDragging = true;
      dragCoef = (e.pageX || e.touches[0].pageX) - prevPageX;
      sliderCarousel.scrollLeft = prevScrollLeft - dragCoef;
      sliderCarousel.classList.add("grab");
      showHideArrows();
    };

    const scrollEnd = (e) => {
      scrollStop = false;
      sliderCarousel.classList.remove("grab");
      if (!isDragging) return;
      isDragging = false;
      autoslide();
    };

    sliderCarousel.addEventListener("mousemove", scrollMove);
    sliderCarousel.addEventListener("touchmove", scrollMove);

    sliderCarousel.addEventListener("mousedown", scrollStart);
    sliderCarousel.addEventListener("touchstart", scrollStart);

    sliderCarousel.addEventListener("mouseup", scrollEnd);
    sliderCarousel.addEventListener("touchend", scrollEnd);
  });
};
export default slider;
