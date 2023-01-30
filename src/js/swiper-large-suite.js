var swiper = new Swiper(".large-suite-gallery", {
    loop: true,
    loopFillGroupWithBlank: true,

    breakpoints: {
      // when window width is >= 414px
      414: {
        slidesPerView: 1.3,
        spaceBetween: 20
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    },

    navigation: {
      nextEl: ".large-arrow-next",
      prevEl: ".large-arrow-prev",
    },

});
