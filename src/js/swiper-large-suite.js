var swiper = new Swiper(".large-suite-gallery", {
  slidesPerView: 1.25,
  spaceBetween: 16,
  loop: true,
  loopFillGroupWithBlank: true,

  breakpoints: {
    // when window width is >= 1024px
    414: {
      slidesPerView: 1.3,
      spaceBetween: 16
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },

  navigation: {
    nextEl: ".large-arrow-next",
    prevEl: ".large-arrow-prev",
  },

});