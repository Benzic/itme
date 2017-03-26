$(function(){
	$("#checkCity").click(function(){
		$(".cityList").show();
		$(".sel").css({
			color:"#41ccb4"
		})
		$(".cityList a").click(function(){
			$(".cityList a").css({
				color:"#666"
			})
			$(this).css({
				color:"#41ccb4"
			})
		})
	})
	$(".cityList").mouseleave(function(){
		$(".cityList").hide();
	})
	var pulls = $(".pudownList .pudownList1");

	$(".pullDownList li").mouseenter(function(){
		$(".pudownList").show();
		var index = parseInt($(this).attr("name"));
		$(pulls[index]).fadeIn();
		$(pulls[index]).mouseenter(function(){
			$(this).show();
		})
	})
	$(".pullDownList li").mouseleave(function(){
		$(".pudownList1").hide();
		$(".pudownList").hide();
	})
	var timer=null,
		nextIndex=2,
		currentIndex=1,
		imgWidth=$("#banner_img li").width(),
		len=$("#banner_img li").length,
		imgs = $("#banner_img li"),
		circles=[];

		
	timer = setInterval(move,3000)
	var first = $(imgs[0]).clone(true)
	var last = $(imgs[len-1]).clone(true)
	len+=2;
	$(last).insertBefore($(imgs[0]));
	$(first).appendTo($("#banner_img"));
	$("#banner_img").css({
			width:len*imgWidth,
			left:-imgWidth
	})
	function move(){
		$(circles[currentIndex]).removeClass("cur");
		$(circles[nextIndex]).addClass("cur");
		var _left = -nextIndex*imgWidth;
		$("#banner_img").animate({left:_left},400,function(){
			if (nextIndex>=len) {
				nextIndex = 2;
				currentIndex=1;
				$("#banner_img").css({
					left:-imgWidth
				})
				$(circles[currentIndex]).addClass("cur");
			}
			if (nextIndex<1) {
				nextIndex=len-1;
				currentIndex=len-2;
				$("#banner_img").css({
					left:-(len-2)*imgWidth
				})
				$(circles[currentIndex]).addClass("cur");
			}
		})
		currentIndex=nextIndex;
		nextIndex++;
	} 
	for (var i = 0; i < len; i++) {
		var _circle = document.createElement("div");
		 _circle.index=i;
		$(_circle).addClass("cir");
		$(_circle).appendTo($(".circles"));
		circles.push(_circle);
		if (i==1) {
			$(_circle).addClass("cur")
		}
		$(_circle).click(function(){
			console.log($(this).index)
			//currentIndex=index;
			move();
		})
	}
	$($(".circles div")[0]).hide();
	$($(".circles div")[len-1]).hide();

})
