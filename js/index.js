$(function(){
	$.cookie.json = true;
    _passager = $.cookie("passager") || [];
    var lenw = _passager.length;
    var htmlm=""
    if (_passager!=[]) {
    	htmlm="<a href='#'>"+_passager[lenw-1].name+"</a>";
    	$("#loginw").html("")
    	$("#loginw").append(htmlm)
    	htmlm=""
    }

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
			console.log(index2)
			$($(".pullDownList li")[index2]).css({
				boxShadow: "2px 0 8px rgba(200,200,200,0.9)",
				background: "white",
				borderLeft: "4px solid #41CCB4"
			})
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
	$("#banner-w").mouseenter(function(){
		$("#pullDown").css({
				background:"rgb(255, 255, 255)"
		})
		$(".pullDownList li").css({
			boxShadow: "none",
			background: "rgb(255, 255, 255)",
			borderLeft: "none"
		})
	})
	$(".pullDownList li").mouseleave(function(){
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
	})
	$(".pudownList .pudownList1").mouseleave(function(){
		$("#pullDown").css({
				background:"rgb(255, 255, 255)"
		})
		$(".pullDownList li").css({
			boxShadow: "none",
			background: "rgb(255, 255, 255)",
			borderLeft: "none"
		})
	})
	var timer=null,
		nextIndex=2,
		currentIndex=1,
		imgWidth=$("#banner_img li").width(),
		img2Width = $("#banner_img2 li").width(),
		len=$("#banner_img li").length,
		imgs = $("#banner_img li"),
		circles=[],
		nextIndex2=2,
		currentIndex2=1,
		timer2=null,
		len2=$("#banner_img2 li").length,
		imgs2=$("#banner_img2 li");

		
	timer = setInterval(move,3000)
	timer2 = setInterval(move2,3000)
	var first = $(imgs[0]).clone(true)
	var last = $(imgs[len-1]).clone(true)
	len+=2;
	$(last).insertBefore($(imgs[0]));
	$(first).appendTo($("#banner_img"));
	$("#banner_img").css({
			width:len*imgWidth,
			left:-imgWidth
	})

	len2+=1;
	var first1 = $(imgs2[1]).clone(true)
	var last1 = $(imgs2[len-1]).clone(true)
	$(last1).insertBefore($(imgs2[0]));
	$(first1).appendTo($("#banner_img2"));
	$("#banner_img2").css({
			width:len2*img2Width,
			left:-img2Width
	})
	function move(){
		$(circles[currentIndex]).removeClass("cur");
		$(circles[nextIndex]).addClass("cur");
		var _left = -nextIndex*imgWidth;
		$("#banner_img").animate({left:_left},800,function(){
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
	function move2(){
		var _left = -nextIndex2*img2Width;
		$("#banner_img2").animate({left:_left},600,function(){
			if (nextIndex2>=len2) {
				nextIndex2 = 2;
				currentIndex2=1;
				$("#banner_img2").css({
					left:-img2Width
				})
			}
			if (nextIndex2<1) {
				nextIndex2=len2-1;
				currentIndex2=len2-2;
				$("#banner_img2").css({
					left:-(len2-2)*img2Width
				})
			}
		})
		currentIndex2=nextIndex2;
		nextIndex2++;
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
			var index = this.index
			nextIndex = index;
			nextIndex2= index;
			move();
			move2();
		})
	}
	$($(".circles div")[0]).hide();
	$($(".circles div")[len-1]).hide();


	
	$(".banner-pic,.circles").mouseenter(function(){
		clearInterval(timer);
		clearInterval(timer2);
	})
	$(".banner-pic").mouseleave(function(){
		timer = setInterval(move,3000)
		timer2 = setInterval(move2,3000)
	})

	var brands = $("#reconmmend .brand_bottom .brand_left"),
		lis = $("#reconmmend .brand_nav li") ;
	$("#reconmmend .brand_nav li").click(function(){
		lis.each(function(i){
			$($("#reconmmend .brand_nav li")[i]).find("a").removeClass("currenta")
			$($("#reconmmend .brand_nav li")[i]).find("img").removeClass("currentimg")
		})
		
		$(this).find("a").addClass("currenta");
		$(this).find("img").addClass("currentimg")

		var index = parseInt($(this).attr("name"));
		$(brands).hide();
		$(brands[index]).fadeIn();
		$(brands[index]).css({
			zIndex:"200"
		})
	})
	$("#reconmmend .brand_nav li").mouseenter(function (){
		$("#reconmmend .brand_nav li a").css({
			"borderColor":"#d7d7d7"
		})
		$("#reconmmend .brand_nav li img").hide();
		$(this).find("a").css({
			"borderColor":"#41ccb4"
		})

		$(this).find("img").show()
		console.log(1)
	})

	var products = $(".product_con .product_bottom .products-box"),
		lis = $(".product_con .product_nav li") ;
	$(".product_con .product_nav li").click(function(){
		lis.each(function(i){
			$($(".product_con .product_nav li")[i]).find("a").removeClass("currenta")
			$($(".product_con .product_nav li")[i]).find("img").removeClass("currentimg")
		})
		
		$(this).find("a").addClass("currenta");
		$(this).find("img").addClass("currentimg")

		var index = parseInt($(this).attr("name"));
		$(products).hide();
		console.log(index)
		console.log(products);
		$(products[index]).fadeIn();
		$(products[index]).css({
			zIndex:"200"
		})
	})
	$(".product_con .product_nav li").mouseenter(function (){
		$(".product_con .product_nav li a").css({
			"borderColor":"#d7d7d7"
		})
		$(".product_con .product_nav li img").hide();
		$(this).find("a").css({
			"borderColor":"#41ccb4"
		})

		$(this).find("img").show()
		console.log(1)
	})


	var timer3 = null,
		nextIndex3=2,
		currentIndex3=1,
		img3Width = $(".pics li").width(),
		imgs3 = $(".pics li"),
		len3=$(".pics li").length,
		circles2=[];
		timer3 = setInterval(move3,3000);
		
		var first3 = $(imgs3[0]).clone(true)
		var last3 = $(imgs3[len3-1]).clone(true)
		$(last3).insertBefore($(imgs3[0]));
		$(first3).appendTo($(".pics"));
		len3+=2;
		$(".pics").css({
			width:len3*img3Width,
			left:-img3Width
		})
		$(".circles2").css({
			width:"90",
			marginLeft:"80px"
		})
		function move3(){
			$(circles2[currentIndex3]).removeClass("curr");
			$(circles2[nextIndex3]).addClass("curr");
			var _left = -nextIndex3*img3Width;
			$(".pics").animate({left:_left},400,function(){
				if (nextIndex3>=len3) {
					nextIndex3 = 2;
					currentIndex3=1;
					$(".pics").css({
						left:-img3Width
					})
					$(circles2[currentIndex3]).addClass("curr");
				}
				if (nextIndex3<1) {
					nextIndex3=len3-1;
					currentIndex3=len3-2;
					$(".pics").css({
						left:-(len3-2)*img3Width
					})
					$(circles2[currentIndex3]).addClass("currs");
				}
			})
			currentIndex3=nextIndex3;
			nextIndex3++;
		}
		for (var i = 0; i < len3; i++) {
			var _circle2 = document.createElement("div");
			 _circle2.index=i;
			$(_circle2).addClass("cirr");
			$(_circle2).appendTo($(".circles2"));
			circles2.push(_circle2);
			if (i===1) {
				$(_circle2).addClass("curr")
			}
			$(_circle2).click(function(){
				var index2 = this.index;
				nextIndex3 = index2;
				move3();
			})
		}
		$($(".circles2 div")[0]).hide();
		$($(".circles2 div")[len3-1]).hide();
		$(".brand_lunbo").mouseenter(function(){
			clearInterval(timer3);
		});
		$(".brand_lunbo").mouseleave(function(){
			timer3 = setInterval(move3,3000);
		})

		//文字轮播

		var timer4 = null,
		wordHeight = $(".word_lunbo").height();
		var n=1;
		timer4 = setInterval(move4,100);
		function move4(){
			var liss =  $(".word_lunbo li");
			var liss2 =  $(".laba_con li");
			n++	
			if (n%30==0) {
				
				var last = $(liss[0]).clone(true);
				$(last).appendTo($(".word_lunbo"));
				var last2 = $(liss2[0]).clone(true);
				$(last2).appendTo($(".laba_con"));
			}
			if (n%60==0) {
				$(liss).eq(0).remove();
				$(liss2).eq(0).remove();
			}
			$(".tempWrap ul").animate({top:-n},100,function(){
				
			})
		}

		$(".markets p").mouseenter(function(){
			$(".boxs").hide();
			$(this).next().show();
		})


		var timer5 = null,
		nextIndex5=0,
		img4Width = $(".showimgs li").width(),
		len4=$(".showimgs li").length,
		timer5 = setInterval(move5,2000),
		first4=null;
		$
		function move5(){
			var imgs4 = imgs4 = $(".showimgs li");
			var _left = -205;
			$(".showimgs").animate({left:_left},400,function(){
				first4= $(imgs4[0]).clone(true)
				$(first4).appendTo($(".showimgs"));

				$(imgs4).eq(0).remove();
				$(".showimgs").css({
					left:"0"
				})
		})
	}

	
	
})
