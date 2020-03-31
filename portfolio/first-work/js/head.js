queries = $(".faq-query-column");
for (i=0; i<4; i++) {
	queries[i].css("width", "-=30");
}

$("html").onload(function () {
	$("#preloader").addClass("loaded");
});

// Animated scroll to anchors
$(document).ready(function(){
  $('a.internal').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 56}, 600);
    e.preventDefault();
  });
  console.log("Loaded!!!");
  $("#preloader").addClass("loaded");
  $("#navbar").removeClass("d-none");
  return false;
});
