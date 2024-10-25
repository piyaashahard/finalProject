$(function () {
  $(".productFeaturedImageSlider").slick({
    arrows: false,
    asNavFor: ".productThumbImageSlider",
  });
  $(".productThumbImageSlider").slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: ".productFeaturedImageSlider",
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });
});
