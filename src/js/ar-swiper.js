var swiper = new Swiper('.ar-swiper', {
  slidesPerView: 1.5,
  cssMode: true,
  loop: true,
  // autoplay: true,
  navigation: {
    nextEl: '.ar-swiper-right',
    prevEl: '.ar-swiper-left',
  },
  mousewheel: true,
  keyboard: true,
});
