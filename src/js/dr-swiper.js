var swiper = new Swiper(".details-restaurant__swiper-container", {
      slidesPerView: "auto",
      loop: true,
      autoplay: true,
      autoplaySpeed: 2000,
      loopFillGroupWithBlank: true,
      spaceBetween: 20,
            navigation: {
      nextEl: '.details-restaurant__next',
      prevEl: '.details-restaurant__prev',
      },
             breakpoints: {
//     // when window width is >= 1024px
    1024: {
      spaceBetween: 34,
    },
    1280: {
      spaceBetween: 86,
    },
  },
    });
