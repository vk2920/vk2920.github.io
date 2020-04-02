// Window properties
win_w = $(window).width();
win_h = $(window).height();
console.log("Window: " + win_w + "x" + win_h);

// Save heights of sections
main_h = $("#main").height();
features_h = $("#features").height();
portfolio_h = $("#portfolio").height();
console.log("Heights of sections contents saved");

if (win_w >= 768) {
  porfolio_carousel_w = $("#porfolio-carousel").width();
  portfolio_card_w = porfolio_carousel_w - 278;
  $(".portfolio-card").css("width", portfolio_card_w);
  console.log("Size of portfolio-card is setted to " + portfolio_card_w);
}
if (win_w < 768) {
  $(".price-element-image").addClass("d-none");
  $(".price-element-description").css("padding-top", 0);
}

// // Paddings for sections
// // MAIN
// main_pt = (win_h - main_h) / 2 + 56;
// $("#main").css("padding-top", main_pt);
// // FEATURES
// features_pt = (win_h - features_h) / 2 + 56;
// $("#features").css("padding-top", features_pt);
// // PORTFOLIO
// portfolio_pt = (win_h - portfolio_h) / 2 + 56;
// $("#portfolio").css("padding-top", portfolio_pt);

$(document).resize(function() {
  // Update window properties
  win_w = $(window).width();
  win_h = $(window).height();

  if (win_w >= 768) {
    porfolio_carousel_w = $("#porfolio-carousel").width();
    portfolio_card_w = porfolio_carousel_w - 278;
    $(".portfolio-card").css("width", portfolio_card_w);
    console.log("Size of portfolio-card is setted to " + portfolio_card_w);
  }

  // Paddings for sections
  // MAIN
  main_pt = (win_h - main_h) / 2 + 56;
  $("#main").css("padding-top", main_pt);
  // FEATURES
  features_pt = (win_h - features_h) / 2 + 56;
  $("#features").css("padding-top", features_pt);
  // PORTFOLIO
  portfolio_pt = (win_h - portfolio_h) / 2 + 56;
  $("#portfolio").css("padding-top", portfolio_pt);
});

$(document).ready(function(){
  // Animated scroll to anchors
  $('a.internal').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 56}, 600);
    e.preventDefault();
  });
  // Close preloader
  console.log("Loaded!!!");
  $('#preloader').fadeOut().end().delay(300).fadeOut('slow');
  return false;
});
