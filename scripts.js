w = $(".portfoio-card").css("width");
w = parseInt(w);
w -= 10;
$(".screenshot").css("width",w+"px");

document.body.onload = function() {
  setTimeout(function(){
    $(".preloader").toggleClass("loaded");
  },500);
}