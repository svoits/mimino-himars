var swiper = new Swiper('.classic-suite-gallery', {
  slidesPerView: 1.42,
  spaceBetween: 16,

  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: true,
  autoplaySpeed: 2000,

  navigation: {
    nextEl: '.classic-arrow-next',
    prevEl: '.classic-arrow-prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
