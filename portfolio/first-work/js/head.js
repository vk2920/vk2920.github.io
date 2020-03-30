queries = $(".faq-query-column");
for (i=0; i<4; i++) {
	queries[i].css("width", "-=30");
}

$("html").onload(function () {
	$("#preloader").addClass("loaded");
});

$(document).ready(function(){
	$('#main').click(function(){
		// скорость скролла
		var speed = 1000;
		// место скролла
		var top = $('#main').offset().top;
		$('html, body').animate({scrollTop: top}, speed);
		return false;
	});
	$('#about').click(function(){
		// скорость скролла
		var speed = 1000;
		// место скролла
		var top = $('#about').offset().top;
		$('html, body').animate({scrollTop: top}, speed);
		return false;
	});
	$('#faq').click(function(){
		// скорость скролла
		var speed = 1000;
		// место скролла
		var top = $('#faq').offset().top;
		$('html, body').animate({scrollTop: top}, speed);
		return false;
	});
	$('#tariff').click(function(){
		// скорость скролла
		var speed = 1000;
		// место скролла
		var top = $('#tariff').offset().top;
		$('html, body').animate({scrollTop: top}, speed);
		return false;
	});
	$('#contact').click(function(){
		// скорость скролла
		var speed = 1000;
		// место скролла
		var top = $('#contact').offset().top;
		$('html, body').animate({scrollTop: top}, speed);
		return false;
	});
});