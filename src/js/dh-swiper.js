  var swiper = new Swiper(".dh-swiper", {
      slidesPerView: -1.25,
      // cssMode: true,
      spaceBetween: 20,
      loop: true,
      loopFillGroupWithBlank: true, 
      variableWidth: true,
      
      navigation: {
      nextEl: ".dh-slide-next",
      prevEl: ".dh-slide-prev",
    },
      
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 34
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 86
    },
  }
    });