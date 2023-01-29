// var swiper = new Swiper(".dh-swiper", {//в лапках пишемо назву вашого контейнеру
//       slidesPerView: 1.25, //кількість об'єктів що відображаються
//       // cssMode: true,
//       navigation: {
//         nextEl: ".dh-slide-next",// в лапках ставимо клас об'єкта при на тисненні на який переключається слайд
//         prevEl: ".dh-slide-prev",
//       },

//       mousewheel: true,//прокрутка мишкою
//       keyboard: true,//прокрутка клавою
// });
    
var swiper = new Swiper(".dh-swiper", {
  slidesPerView: 1.5,
  // cssMode: true,
  // swiperProgress: 0.5,
  inverse: true;
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      // reverseDirection: true,
      variableWidth: true,
      navigation: {
        nextEl: ".dh-slide-next",
        prevEl: ".dh-slide-prev",
  },
       // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 414px
    414: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
    });