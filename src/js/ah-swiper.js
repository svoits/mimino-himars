var swiper = new Swiper('.about-hotel-swiper', {
  slidesPerView: 1.3,
  spaceBetween: 20,

  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.ah-swiper-right',
    prevEl: '.ah-swiper-left',
  },

  breakpoints: {
    414: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
