$(document).resize(function() {
  features_h = $("#features").height();
  win_h = $(window).height();
  features_pt = (win_h - features_h) / 2 + 56;
  $("#features").css("padding-top", features_pt);
});

$(document).ready(function(){
  $('a.internal').bind("click", function(e){
    var anchor = $(this);
    $('html, body').animate({scrollTop: $(anchor.attr('href')).offset().top}, 1000);
    e.preventDefault();
  });
  return false;
});

// $(document).ready(function() {
//   $("a.internal").click(function() {
//     var elementClick = $(this).attr("href")
//     var destination = $(elementClick).offset().top;
//     jQuery("html:not(:animated),body:not(:animated)").animate({
//       scrollTop: destination
//     }, 800);
//     return false;
//   });
// });
