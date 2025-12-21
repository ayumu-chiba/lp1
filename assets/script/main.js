$(function () {
  var hamburger = $('.hamburger-menu');
  $('.hamburger-button').on('click', function () {
    hamburger.toggleClass('hamburger-menu-active');
  });

  $('.cover-slick').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    fade: true,
  });

  $(window).on('resize', function () {
    hamburger.removeClass('hamburger-menu-active');
  });
});



$('#smarttab').smartTab({
  enableUrlHash: false,
  autoAdjustHeight: false,
});
