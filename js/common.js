$(function () {
  $("#MobileHamburger").click(function () {
    $(this).toggleClass("hamburger-open");
    $("#headerNav").toggle();
  });
  $('.scene-item').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
});
