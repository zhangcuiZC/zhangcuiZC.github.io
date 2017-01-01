$(function(){
	var loadtimer=null;
	var a=null;

	//设置loading层的高度
	$(".loading").css('height', $("body").height());

	//**************以下为加载页面的相关设置
	function drawFlame(color, px, py, radius) {
	    this._.fillStyle = color;
		this._.beginPath();
		this._.arc(
			px, py,
			radius, 0,
			Math.PI*2, false
		);
		this._.closePath();
		this._.fill();
	}
	var loader={
		width: 100,
		height: 100,

		stepsPerFrame: 4,
		trailLength: 0.8,
		pointDistance: 0.01,
		fps: 20,

		backgroundColor: '#000',

		path: [
			['arc', 60, 60, 30, 0, 360]
		],

		step: function(point, index, frame) {

			var sizeMultiplier = 10;
	        var radius = sizeMultiplier * (index > 0.5 ? 1-index : index);
	        
	        drawFlame.call(this, '#FF6C08', point.x*index, point.y, radius);
	        drawFlame.call(this, '#FFD341', point.x, point.y*index, radius);
	        drawFlame.call(this, '#FF3000', point.x, point.y, radius);

		}
	};

	a=new Sonic(loader);
	$("#canvascontainer").append(a.canvas);
	a.play();
	//**************以上为加载页面的相关设置

	//点击加载页面的按钮后关闭加载页面
	loadtimer=setTimeout(function(){
		$(".loading .btn").show();
	},2000);
	$(".loading .btn").click(closeloading);
});

//完全加载后取消loading层
function closeloading(){
	new WOW().init();
	$(".loading").fadeOut(400);
	$("#portfolio img").each(function() {
		var thisimg=$(this);
		thisimg.attr('src', thisimg.attr('data-src'));
	});
	document.getElementsByTagName('body')[0].style.overflow="visible";
}
window.onload=closeloading;