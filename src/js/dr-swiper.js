var swiper = new Swiper('.details-restaurant__swiper-container', {
  slidesPerView: 1.5,
  spaceBetween: 20,

  breakpoints: {
    414: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 34,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
  },
  loop: true,

  navigation: {
    nextEl: '.details-restaurant__next',
    prevEl: '.details-restaurant__prev',
  },
});
