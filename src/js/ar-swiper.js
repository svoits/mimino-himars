var swiper = new Swiper('.ar-swiper', {
  slidesPerView: 1.5,
  spaceBetween: 25,
  breakpoints: {
    414: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,

  cssMode: true,
  navigation: {
    nextEl: '.ar-swiper-right',
    prevEl: '.ar-swiper-left',
  },
});
// var swiper = new Swiper('.ar-swiper', {
//   //в лапках пишемо назву вашого контейнеру
//   slidesPerView: 1.5, //кількість об'єктів що відображаються
//   cssMode: true,
//   navigation: {
//     nextEl: '.ar-swiper-right', // в лапках ставимо клас об'єкта при на тисненні на який переключається слайд
//     prevEl: '.ar-swiper-left',
//   },
//   loop: true,
//   loopFillGroupWithBlank: true,
//   mousewheel: true, //прокрутка мишкою
//   keyboard: true, //прокрутка клавою
// });
