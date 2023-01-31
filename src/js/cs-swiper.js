var swiper = new Swiper('.cs-swiper', {
  slidesPerView: 1.315,
  spaceBetween: 25,

  loop: true,
  // loopedSlides: 4,
  // loopFillGroupWithBlank: true,

  //   autoplay: true,
  //   autoplaySpeed: 2000,

  navigation: {
    nextEl: '.cs-swiper-next',
    prevEl: '.cs-swiper-prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
