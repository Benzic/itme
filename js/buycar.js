$("#head").load("head.html");
$("#bottom").load("footer.html");
$(function(){
	$.cookie.json = true;
    var _passager = $.cookie("passager") || [];
    var lenw = _passager.length;
    var htmlm=""
    console.log(_passager)
    if (_passager!=[]) {
    	htmlm="<a href='#'>"+_passager[0].name+"</a>";
    	$("#loginw").html("")
    	$("#loginw").append(htmlm)
    	htmlm=""
	}
	$(".check_all").click(function(){
				var state = $(this).prop("checked");
				 $(".ck_product").prop("checked", state); 
				 calcation();

	});
	var array = $.cookie("buycar") || [];

	console.log(array)
   	var nhtml ="";
	$.each(array,function(index,element){
		nhtml = "<input type='checkbox' class='ck_product'><dl><dt><img src='"+array[index].pic+"' alt='"+array[index].name+"'></dt><dd><p>"+array[index].name+"</p></dd></dl><ul><li><p>￥"+array[index].price+"</p><h1>"+array[index].class+"</h1> </li> <li><span class='jian'>-</span><input type='text' value='"+array[index].amount+"' id='amount'><span class='jia'>+</span> </li><li><em class='zong'>￥"+array[index].price*array[index].amount+"</em></li> <li><h3>删除</h3> </li></ul>"
		$(".name").text(array[index].name);
		$(".cart_details").append(nhtml)
		$(".phone").text("电话："+array[index].phone)
		$(".jian").click(function(){
               var amount = $(this).next().val();
                amount--;
                $(this).next().val(amount);
                array[index].amount=amount
                $.cookie("buycar",array,{expires:7,path:"/"})
                calcation()
	   })
	   $(".jia").click(function(){
	   		var amount = $(this).prev().val();
                amount++;
                array[index].amount=amount
                $(this).prev().val(amount);
                $.cookie("buycar",array,{expires:7,path:"/"})
                calcation()
	   })
	   function calcation(){
		    var $ck = $(".ck_product:not(:first):checked")
		    var sum=0;
		    sum = array[index].amount*array[index].price
		    $(".zong").text("¥"+sum);
		}

	})


	

})

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


