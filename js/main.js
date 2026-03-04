// Aos - the right initialisation
jQuery(document).ready(function () {
    (function () {
        // your page initialization code here
        // the DOM will be available here
        AOS.init({
            duration: 750,
            offset: 0, // offset (in px) from the original trigger point
            anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
        });
    })();
});
// //

if (document.querySelector(".langs")) {
  const langs = document.querySelector(".langs");
  const langsList = document.querySelector(".langs-list");
  const items = langsList.querySelectorAll(".langs-item");

  // Создаем кружок
  const highlight = document.createElement("div");
  highlight.classList.add("langs__highlight");
  langs.appendChild(highlight);

  // Находим активный элемент
  let activeItem = langsList.querySelector(".langs-item--active");

  function moveHighlight(target) {
    const rect = target.getBoundingClientRect();
    const parentRect = langsList.getBoundingClientRect();
    const left = rect.left - parentRect.left;
    highlight.style.transform = `translate(${left}px, -50%)`;
  }

  // Изначально на активном
  moveHighlight(activeItem);

  // Ховер по элементам
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => moveHighlight(item));
    item.addEventListener("mouseleave", () => moveHighlight(activeItem));
  });
}

$(function () {
  $(".burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });

  $(".menu__link").on("click", function (event) {
    $("body").toggleClass("body--active");
  });
});

new Swiper(".about-swiper", {
  slidesPerView: 5,
  loop: true,
  initialSlide: 2,
  centeredSlides: true,
  speed: 750,
  spaceBetween: 30,
  navigation: {
    prevEl: ".arrow--about-prev",
    nextEl: ".arrow--about-next",
  },
  pagination: {
    el: ".pagination--about",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    301: {
      slidesPerView: 2,
      loop: true,
      initialSlide: 2,
      centeredSlides: true,
      speed: 750,
      spaceBetween: 30,
    },
    769: {
      slidesPerView: 3,
      loop: true,
      initialSlide: 2,
      centeredSlides: true,
      speed: 750,
      spaceBetween: 30,
    },
    993: {
      slidesPerView: 3,
      loop: true,
      initialSlide: 2,
      centeredSlides: true,
      speed: 750,
      spaceBetween: 30,
    },
    1201: {
      slidesPerView: 5,
      loop: true,
      initialSlide: 2,
      centeredSlides: true,
      speed: 750,
      spaceBetween: 30,
    },
  },
});



