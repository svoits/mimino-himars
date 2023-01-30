var swiper = new Swiper('.ar-swiper', {
  slidesPerView: 1.25,
  spaceBetween: 25,

  loop: true,
  loopedSlides: 4,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.ar-swiper-prew',
    prevEl: '.ar-swiper-next',
  },

  breakpoints: {
    414: {
      slidesPerView: 1.25,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
