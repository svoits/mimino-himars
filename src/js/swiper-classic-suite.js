var swiper = new Swiper(".classic-suite-gallery", {
    // slidesPerView: 1.31,
    // spaceBetween: 16,
    loop: true,
    loopFillGroupWithBlank: true,
  
    breakpoints: {
      // when window width is >= 1024px
      414: {
        slidesPerView: 1.5,
        spaceBetween: 16
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    },
  
    navigation: {
      nextEl: ".classic-arrow-next",
      prevEl: ".classic-arrow-prev",
    },
  
  });