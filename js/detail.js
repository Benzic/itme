$("#bottom").load("footer.html");
$("#head").load("head.html");
$("#head").on("click","#checkCity",function(){
	console.log(1)
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
$("#head").on("mouseleave",".cityList",function(){
	$(".cityList").hide(0);
})
$("#head").on("click",".more",function(){
	
	$("#pullDown").slideDown(500);
})

$("#head").on("mouseenter",".pullDownList li",function(){
	var pulls = $(".pudownList .pudownList1");
	$(".pullDownList li").css({
		background:"rgb(242, 242, 242)"
	})
	$("#pullDown").css({
		background:"rgb(242, 242, 242)"
	})
	$(this).css({
		boxShadow: "2px 0 8px rgba(200,200,200,0.9)",
		background: "white",
		borderLeft: "4px solid #41CCB4"
	})
	$(".pudownList").show();
	var index = parseInt($(this).attr("name"));
	$(pulls[index]).fadeIn();
	$(pulls[index]).mouseenter(function(){
		var index2 = parseInt($(this).attr("name"));
		$($(".pullDownList li")[index2]).css({
			boxShadow: "2px 0 8px rgba(200,200,200,0.9)",
			background: "white",
			borderLeft: "4px solid #41CCB4"
		})
		console.log(index2)
		$("#pullDown").css({
			background:"rgb(242, 242, 242)"
		})
		$(this).show();
		$(".pudownList").show();
	})
	$(pulls[index]).mouseleave(function(){
		$(this).hide();
		$(".pudownList").hide();
	})
})

$("#box_main").mouseenter(function(){
		$("#pullDown").css({
				background:"rgb(255, 255, 255)"
		})
		$(".pullDownList li").css({
			boxShadow: "none",
			background: "rgb(255, 255, 255)",
			borderLeft: "none"
		})
		$("#pullDown").slideUp(500);
})


$("#head").on("mouseleave",".pullDownList li",function(){
		$("#pullDown").css({
				background:"rgb(255, 255, 255)"
		})
		$(".pullDownList li").css({
			boxShadow: "none",
			background: "rgb(242, 242, 242)",
			borderLeft: "none"
		})
		$(".pudownList1").hide();
		$(".pudownList").hide();
	
	$("#head").on("mouseleave",".pudownList .pudownList1",function(){
		$("#pullDown").css({
				background:"rgb(255, 255, 255)"
		})
		$(".pullDownList li").css({
			boxShadow: "none",
			background: "rgb(255, 255, 255)",
			borderLeft: "none"
		})

	})
})


$(window).scroll(function(){
	var sorTop = $(this).scrollTop();
	var scor = $("#scor").offset().top;
	console.log(sorTop>scor);
	if (sorTop>scor) {
		$("#floatNav").fadeIn();
	}else{
		$("#floatNav").hide();
	}

})

var conWidth = $("#box").width()/2,
	conHeight = $("#box").height()/2,
	middleWidth = $("#container").offset().left,
	middleHeight = $("#container").offset().top,
	bigWidth = $("#big").width(),
	bigHeight = $("#big").height();
	bix = bigWidth/conWidth/2,
	biy = bigHeight/conHeight/2;
 	$("#container").mouseenter(function(){
 		$("#box").show()
 		$("#big").show()
 	})
 	$("#container").mouseleave( function(){
 		$("#box").hide()
 		$("#big").hide()
 	})
 	$("#container").mousemove(function(e){
 		_left = e.pageX-middleWidth-conWidth;
 		_top =  e.pageY-middleHeight*2-conHeight*2;
		if (_left<0) {
			_left = 0;
		}else if (_left>130) {
			_left = 132
		};
		if (_top<-1) {
			_top = -1;
		}else if (_top>38) {
			_top = 38
		}
 		$("#box").css({
 			left:_left,
 			top:_top
 		})
 		$("#bpic").css({
 			left:-bix*_left,
 			top:-biy*_top
 		})

	})

	$(".pri-ul li").click(function(){
		$(".pri-ul li").removeClass("sel");
		$(this).addClass("sel")
		var n = parseInt($(this).attr("name"));
		console.log(n)
		if (n==1) {
			$(".result").hide();
			$(".koubei").show();
		}
		if (n==0) {
			$(".result").show();
			$(".koubei").hide();
		}
		if(n==2){
			$(".result").hide();
			$(".koubei").hide();
		}
	})
	
	var imgarray = $(".star li img"); 
$(".star li img").click(function(){
	var m = $(this).attr("name");
	$($(this).parent().children()).attr("src","images/detail/hui.jpg");

	
	for(var i = 0; i<=m; i++){
		$($(this).parent().children()[i]).attr("src","images/detail/lian.jpg")
	}

	var imgarray = $(this).parent().parent().find("img");
	var count = 0;
	imgarray.each(function(a){
		if($(imgarray[a]).attr("src")!="images/detail/hui.jpg"){
			
			count++;
		}
		var fln = (count/30*5).toFixed(2);
		$(".df span:first-child").text(fln)
	})
})
$("#ulScores li").click(function(){
	$("#ulScores li").removeClass("sel")
	$(this).addClass("sel")
	var nidex = $(this).attr("data-val")
	if (nidex==4||nidex==0) {
		$(".comment li").show();
	}else{
		$(".comment li").hide();
	}
})
