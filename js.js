$(document).ready(function() {
	$(".task1 > h4 > a").mouseover(function(){
    	$(".task1").css("background-image", "url(img/icon_eclipse_inactive.png)");
    	$(".count1").css("background-image", "url(img/icon_person_inactive.png)");
    	$(".task1 > h4 > a").css("color", "#cccccc");
    	$(".count1").css("color", "#cccccc");
    })
    $(".task1 > h4 > a").mouseout(function(){
    	$(".task1").css("background-image", "url(img/icon_eclipse_active.png)");
    	$(".count1").css("background-image", "url(img/icon_person_active.png)");
    	$(".task1 > h4 > a").css("color", "#2498f4");
    	$(".count1").css("color", "#2498f4");
    })
	
	
	$(".count1").mouseover(function(){
    	$(".task1").css("background-image", "url(img/icon_eclipse_inactive.png)");
    	$(".count1").css("background-image", "url(img/icon_person_inactive.png)");
    	$(".count1").css("color", "#cccccc");
    	$(".task1 > h4 > a").css("color", "#cccccc");
    })
    $(".count1").mouseout(function(){
    	$(".task1").css("background-image", "url(img/icon_eclipse_active.png)");
    	$(".count1").css("background-image", "url(img/icon_person_active.png)");
    	$(".count1").css("color", "#2498f4");
    	$(".task1 > h4 > a").css("color", "#2498f4");
    })
	
	
	
	
	$(".task2 > h4 > a").mouseover(function(){
    	$(".task2").css("background-image", "url(img/icon_eclipse_inactive.png)");
    	$(".count2").css("background-image", "url(img/icon_person_inactive.png)");
    	$(".task2 > h4 > a").css("color", "#cccccc");
    	$(".count2").css("color", "#cccccc");
    })
    $(".task2 > h4 > a").mouseout(function(){
    	$(".task2").css("background-image", "url(img/icon_eclipse_active.png)");
    	$(".count2").css("background-image", "url(img/icon_person_active.png)");
    	$(".task2 > h4 > a").css("color", "#2498f4");
    	$(".count2").css("color", "#2498f4");
    })
	
	
	$(".count2").mouseover(function(){
    	$(".task2").css("background-image", "url(img/icon_eclipse_inactive.png)");
    	$(".count2").css("background-image", "url(img/icon_person_inactive.png)");
    	$(".count2").css("color", "#cccccc");
    	$(".task2 > h4 > a").css("color", "#cccccc");
    })
    $(".count2").mouseout(function(){
    	$(".task2").css("background-image", "url(img/icon_eclipse_active.png)");
    	$(".count2").css("background-image", "url(img/icon_person_active.png)");
    	$(".count2").css("color", "#2498f4");
    	$(".task2 > h4 > a").css("color", "#2498f4");
    })
    	
	
	
	
	$(".task3 > h4 > a").mouseover(function(){
    	$(".task3").css("background-image", "url(img/icon_eclipse_inactive.png)");
    	$(".count3").css("background-image", "url(img/icon_person_inactive.png)");
    	$(".task3 > h4 > a").css("color", "#cccccc");
    	$(".count3").css("color", "#cccccc");
    })
    $(".task3 > h4 > a").mouseout(function(){
    	$(".task3").css("background-image", "url(img/icon_eclipse_active.png)");
    	$(".count3").css("background-image", "url(img/icon_person_active.png)");
    	$(".task3 > h4 > a").css("color", "#2498f4");
    	$(".count3").css("color", "#2498f4");
    })
	
	
	$(".count3").mouseover(function(){
    	$(".task3").css("background-image", "url(img/icon_eclipse_inactive.png)");
    	$(".count3").css("background-image", "url(img/icon_person_inactive.png)");
    	$(".count3").css("color", "#cccccc");
    	$(".task3 > h4 > a").css("color", "#cccccc");
    })
    $(".count3").mouseout(function(){
    	$(".task3").css("background-image", "url(img/icon_eclipse_active.png)");
    	$(".count3").css("background-image", "url(img/icon_person_active.png)");
    	$(".count3").css("color", "#2498f4");
    	$(".task3 > h4 > a").css("color", "#2498f4");
    })
    	
	
	
	
	$(".task4 > h4 > a").mouseover(function(){
    	$(".task4").css("background-image", "url(img/icon_eclipse_inactive.png)");
    	$(".count4").css("background-image", "url(img/icon_person_inactive.png)");
    	$(".task4 > h4 > a").css("color", "#cccccc");
    	$(".count4").css("color", "#cccccc");
    })
    $(".task4 > h4 > a").mouseout(function(){
    	$(".task4").css("background-image", "url(img/icon_eclipse_active.png)");
    	$(".count4").css("background-image", "url(img/icon_person_active.png)");
    	$(".task4 > h4 > a").css("color", "#2498f4");
    	$(".count4").css("color", "#2498f4");
    })
	
	
	$(".count4").mouseover(function(){
    	$(".task4").css("background-image", "url(img/icon_eclipse_inactive.png)");
    	$(".count4").css("background-image", "url(img/icon_person_inactive.png)");
    	$(".count4").css("color", "#cccccc");
    	$(".task4 > h4 > a").css("color", "#cccccc");
    })
    $(".count4").mouseout(function(){
    	$(".task4").css("background-image", "url(img/icon_eclipse_active.png)");
    	$(".count4").css("background-image", "url(img/icon_person_active.png)");
    	$(".count4").css("color", "#2498f4");
    	$(".task4 > h4 > a").css("color", "#2498f4");
    })
    
    
    
    
    $("#icon1").mouseup(function(){
    	$(".marker1").css("display", "block");
    	$(".marker2").css("display", "none");
    	$(".marker3").css("display", "none");
    	$(".marker4").css("display", "none");
    	$(".marker5").css("display", "none");
    	$(".marker6").css("display", "none");
    })
    $("#icon2").mouseup(function(){
    	$(".marker1").css("display", "none");
    	$(".marker2").css("display", "block");
    	$(".marker3").css("display", "none");
    	$(".marker4").css("display", "none");
    	$(".marker5").css("display", "none");
    	$(".marker6").css("display", "none");
    })
    $("#icon3").mouseup(function(){
    	$(".marker1").css("display", "none");
    	$(".marker2").css("display", "none");
    	$(".marker3").css("display", "block");
    	$(".marker4").css("display", "none");
    	$(".marker5").css("display", "none");
    	$(".marker6").css("display", "none");
    })
    $("#icon4").mouseup(function(){
    	$(".marker1").css("display", "none");
    	$(".marker2").css("display", "none");
    	$(".marker3").css("display", "none");
    	$(".marker4").css("display", "block");
    	$(".marker5").css("display", "none");
    	$(".marker6").css("display", "none");
    })
    $("#icon5").mouseup(function(){
    	$(".marker1").css("display", "none");
    	$(".marker2").css("display", "none");
    	$(".marker3").css("display", "none");
    	$(".marker4").css("display", "none");
    	$(".marker5").css("display", "block");
    	$(".marker6").css("display", "none");
    })
    $("#icon6").mouseup(function(){
    	$(".marker1").css("display", "none");
    	$(".marker2").css("display", "none");
    	$(".marker3").css("display", "none");
    	$(".marker4").css("display", "none");
    	$(".marker5").css("display", "none");
    	$(".marker6").css("display", "block");
    })
    
    
})
