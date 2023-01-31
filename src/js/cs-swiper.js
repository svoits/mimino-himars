var swiper = new Swiper('.cs-swiper', {
  // loopFillGroupWithBlank: true,
  slidesPerView: 1.53,
  spaceBetween: 16,

  loop: true,

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
