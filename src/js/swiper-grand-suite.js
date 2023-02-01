var swiper = new Swiper('.grand-suite-gallery', {
  slidesPerView: 1.42,
  spaceBetween: 16,

  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: true,
  autoplaySpeed: 2000,

  navigation: {
    nextEl: '.grand-arrow-next',
    prevEl: '.grand-arrow-prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
});
