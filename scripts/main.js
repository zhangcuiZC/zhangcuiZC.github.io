$(function () {
	$("nav li").hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});

	new WOW().init();

	$(".btn").hover(function() {
		$(this).addClass('animated pulse');
	}, function() {
		$(this).removeClass('animated pulse')
	});

	// $(".thumbnail a").hover(function() {
	// 	$(this).parent(".thumbnail").addClass('animated pulse');
	// }, function() {
	// 	$(this).parent(".thumbnail").removeClass('animated pulse');
	// });
})

