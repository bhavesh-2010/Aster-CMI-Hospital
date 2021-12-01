$(document).ready(function () {
  /*testimonial slider */
  $(".ts-items-bx").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* back to top */
  $("#toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });
});
