$(function () {
  $("#MobileHamburger").click(function () {
    $(this).toggleClass("hamburger-open");
    $("#headerNav").toggle();
  });
});
