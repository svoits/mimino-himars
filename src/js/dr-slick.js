$('.details-restaurant-gallery').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '.dr-slick-prev',
  nextArrow: '.dr-slick-next',

  responsive: [
    {
      breakpoint: 414,
      settings: {
        slidesToShow: 1.5,
        useTransform: true,
      },
    },
  ],
});
