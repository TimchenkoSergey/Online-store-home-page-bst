$(function() {
	$('.carousel').carousel({
		interval: 4000
	});
});

$(window).load(function(){
	var carouselCaptionWidth = $("#sidebar-carousel .active img")
	.width();
	$("#sidebar-carousel img").each(function(){
		$(this).attr("width", carouselCaptionWidth);
	});
	$("#sidebar-carousel .sidebar-carousel-caption, \
	   #sidebar-carousel .carousel-indicators, \
	   .sidebar .banner")
	.css("max-width", carouselCaptionWidth + "px");
});