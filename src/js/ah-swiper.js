var swiper = new Swiper('.about-hotel-swiper', {
  slidesPerView: 1.35,
  spaceBetween: 10,

  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: true,
  autoplaySpeed: 2000,

  navigation: {
    nextEl: '.ah-swiper-right',
    prevEl: '.ah-swiper-left',
  },

  breakpoints: {
    360: {
      slidesPerView: 1.32,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
