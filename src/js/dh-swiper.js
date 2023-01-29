var swiper = new Swiper(".dh-swiper", {//в лапках пишемо назву вашого контейнеру
      slidesPerView: 1.5, //кількість об'єктів що відображаються
      cssMode: true,
      navigation: {
        nextEl: ".dh-slide-next",// в лапках ставимо клас об'єкта при на тисненні на який переключається слайд
        prevEl: ".dh-slide-prev",
      },
      pagination: {
        el: ".dh-swiper-pagination", //пагінація якщо є
      },
      mousewheel: true,//прокрутка мишкою
      keyboard: true,//прокрутка клавою
    });