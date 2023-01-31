var swiper = new Swiper('.ar-swiper', {
  slidesPerView: 1.315,
  spaceBetween: 25,

  loop: true,
  // loopedSlides: 4,
  // loopFillGroupWithBlank: true,

  autoplay: true,
  autoplaySpeed: 2000,

  navigation: {
    nextEl: '.ar-swiper-prew',
    prevEl: '.ar-swiper-next',
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
