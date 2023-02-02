var swiper = new Swiper('.grand-suite-gallery', {
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerView: 1.53,
  spaceBetween: 16,

  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.grand-arrow-next',
    prevEl: '.grand-arrow-prev',
  },
});
