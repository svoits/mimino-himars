$('.details-restaurant-gallery').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  //   centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '.slick-prev',
  nextArrow: '.slick-next',

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        centerPadding: '40px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1.5,
      },
    },
  ],
});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
});
