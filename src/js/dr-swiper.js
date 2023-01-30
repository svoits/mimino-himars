var swiper = new Swiper(".details-restaurant-swiper-container", {
      slidesPerView: 1.5,
      spaceBetween: 20,
      
  breakpoints: {
    // when window width is >= 320px
    414: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 34
    },
    1280: {
      slidesPerView: 2.5,
      spaceBetween: 33
     }
    },
      loop: true,
      
      navigation: {
        nextEl: ".details-restaurant-next",
        prevEl: ".details-restaurant-prev",
      },
    });