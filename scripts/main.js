$(function () {
	function loading(){
		$(".loading h1").animate({fontSize:'4em'}, 2500 ,function(){
			$(this).animate({fontSize:'3em'}, 2500);
		});
	}
	loading();
	var loadtimer=setInterval(function(){
		loading();
	},5200);

	new WOW().init();

	var navtimer=null;
	//导航栏点击事件
	$(".nav").on('click', 'a', function(event) {
		var that=$(this);
		var txt=$(event.target).attr('href')+"container";
		$("html,body").animate({scrollTop:$(txt).offset().top}, 400);
		return false;
	});

	//屏幕滚动事件
	$(window).scroll(function() {
		if($("#aboutcontainer").offset().top-$(window).scrollTop()<=0){
			$(".navbar").addClass('changebg');
		}else{
			$(".navbar").removeClass('changebg');
		}
		if($("#homecontainer").offset().top-$(window).scrollTop()<=0.5*$(window).height()){
			clearTimeout(navtimer);
			navtimer=setTimeout(function(){
				$(".nav").find('a').removeClass('active');
				$(".nav li").eq(0).find('a').addClass('active');
			},200);
		}
		if($("#aboutcontainer").offset().top-$(window).scrollTop()<=0.5*$(window).height()){
			clearTimeout(navtimer);
			navtimer=setTimeout(function(){
				$(".nav").find('a').removeClass('active');
				$(".nav li").eq(1).find('a').addClass('active');
			},200);
		}	
		if($("#portfoliocontainer").offset().top-$(window).scrollTop()<=0.5*$(window).height()){
			clearTimeout(navtimer);
			navtimer=setTimeout(function(){
				$(".nav").find('a').removeClass('active');
				$(".nav li").eq(2).find('a').addClass('active');
			},200);
		}
		if($("#contactcontainer").offset().top-$(window).scrollTop()<=0.5*$(window).height()){
			clearTimeout(navtimer);
			navtimer=setTimeout(function(){
				$(".nav").find('a').removeClass('active');
				$(".nav li").eq(3).find('a').addClass('active');
			},200);
		}
	});

	//触发scroll事件
	$(window).trigger('scroll');
	//设置loading层的高度
	$(".loading").css('height', $("body").height());


});
//完全加载后取消loading层
window.onload=function() {
	$(".loading").fadeOut(400);
	clearInterval(loadtimer);
};