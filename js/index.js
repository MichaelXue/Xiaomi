$(function(){
	$('#menu li').mouseover(function(){
		$('.menu_choice').show();
		$(this).siblings().children('.menu_choice').hide();
	}).mouseout(function(){
		$('.menu_choice').hide();
	});
})

$(function(){
	$('.zhuce .buy_car').mouseover(function(){
		$('.hurry_buy').show();
	}).mouseout(function(){
		$('.hurry_buy').hide();
	});
})
//轮播
$(document).ready(function(){
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false,
		slideshowSpeed: 3000
	});
});

//选项卡
$(function(){
	$(".dapei_caption li").mouseover(function() {
		var _index = $(this).index();
		$(".dapei_img").eq(_index).show().siblings().hide();
	});
})

$(function(){
	$(".star_button table i.i2").click(function(){
		$(".star_img").animate({marginLeft:'-1240px'},2000);
	});
	$(".star_button table i.i1").click(function(){
		$(".star_img").animate({marginLeft:'0'},2000);
	});
});

$(function(){
	$("#search .search_input").focusin(function(){
		$("#search .inner_search").hide();
		$(".button_input").css("border-color","#FF6700");
	});
	$("#search .search_input").focusout(function(){
		$("#search .inner_search").show();
		$(".button_input").css("border-color","#A9A9A9");
	});
	$(".button_input").mouseover(function(){
		$(".button_input").css({
			background: '#FF6700',
			color: '#ffffff',
			cursor: 'pointer',
			border: '0'
		});
	});
	$(".button_input").mouseout(function(){
		$(".button_input").css({
			background: '#ffffff',
			color: '#5E5E5E',
			border: '1px solid #A9A9A9'
		});
	});
});