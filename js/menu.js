if ($(window).width() < 480) {
  $("nav").css("flex-direction", "column");
  $(".nav-top").css("width", "100%");
  $("ul").toggleClass("menu-container");
  $("li").hide();
  $(".menu").css("display", "flex").on("click", function(){
    $("li").toggleClass("menu-item");
  });
}
