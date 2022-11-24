// JavaScript Document
$(document).ready(function(){

	
	
	$(".box2").ready(function(){
		$(".box2").delay(3000).fadeOut(1000);
	});
	
	
	$(".hide").ready(function(){
		$(".hide").delay(2500).fadeIn(1200);
	});
	
	$(".b41l").click(function(){
		$(".box4img1").addClass("box4imgl");
		$(".box4img2").fadeIn(100);
	});
	$(".b41r").click(function(){
		$(".box4img1").addClass(".box4imgr");
		$(".box4img2").fadeIn(100);
	});

	
	
	
	$(".box5d").hide();
	$(window).scroll(function(){
		var box5=$(window).scrollTop();
		if (box5>800){
			$(".box5d").fadeIn(200).addClass("box5add");
		}
	});
	
	$(".box11-2").hide();
	$(".btn6").click(function(){
		$(".box11-2").toggle(0);
		$(".btn6").addClass("btn6c");
	})
	
	
	const slider = document.querySelector(".slider input");
	const img = document.querySelector(".b13img .b13img2");
	const drag = document.querySelector(".slider .drag");/*drag拖*/
	slider.oninput=()=>{
		let sliderVal = slider.value;
		drag.style.left = sliderVal +"%";
		img.style.width =sliderVal +"%";
	}
	/*
	$(".box4img1").hide();
	$(".box4img2").hide();
	$(".box4img3").hide();
	*/
	var b4img1 = $(".box4img1").show();
	var b4img2 = $(".box4img2").show();
	var b4img3 = $(".box4img3").show();
	var b4img4 = $(".box4img4").show();
	/*
	$(".b4r").click(function(){
		$(".box4img4").fadeOut(200);
		$(".box4img3").fadeIn(200);
	});
	*/
	
	$(".b4r").click(function(){
		if(b4img4){
			$(".box4img4").fadeOut(200);
			$(".box4img1").show(200);
			$(".box4img2").hide(200);
			$(".box4img3").hide(200);
		}else if(b4img1){
			$(".box4img1").fadeOut(200);
			$(".box4img2").show(200);
			$(".box4img4").hide(200);
			$(".box4img3").hide(200);
		}else if(b4img2){
			$(".box4img2").fadeOut(200);
			$(".box4img3").show(200);
			$(".box4img1").hide(200);
			$(".box4img4").hide(200);
		}else if(b4img3){
			$(".box4img3").fadeOut(200);
			$(".box4img4").show(200);
			$(".box4img2").hide(200);
			$(".box4img1").hide(200);
		}
	});
	
	$(".option").click(function(){
		$(".option").removeClass("active");
		$(this).addClass("active");
	});
	
	
	
	
	$(".b20btn").click(function(){
		$(".b20btn").addClass("b20js","b20l");
	});
	$(".b20l").click(function(){
		$(".b20btn").addClass("b20l");
	});
	
	$(".b22img").mousemove(function(){
		$(".b22-circle").addClass("b22-an")
	});
	$(".b22img").mouseleave(function(){
		$(".b22-circle").removeClass("b22-an")
	});
	
	$(".go-bottom").click(function(){
		$("html,body").animate({scrollTop:$(".down").offset().top},1000);
	});
	
	
	
	
});
		


		


