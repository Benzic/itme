$("#head").load("head.html");
$("#bottom").load("footer.html");
$(function(){
	$.cookie.json = true;
    _passager = $.cookie("passager") || [];
    var lenw = _passager.length;
    var htmlm=""
    console.log(_passager)
    if (_passager!=[]) {
    	htmlm="<a href='#'>"+_passager[lenw-1].name+"</a>";
    	$("#loginw").html("")
    	$("#loginw").append(htmlm)
    	htmlm=""
	}
	 $.ajax({
                    url:"http://www.bianxia.top/demo/selectmusic/product.php",
                    data:{action:"read"},
                    success:function(data){
                    	console.log(data.lastIndexOf("]"))
                        var nn = data.substring(213,1512);
                        var inx = nn.indexOf("null");
                        var nar = nn.replace(/,null/gi, "")
                        var array = JSON.parse(nar);
                        var html = "";
                       
                        console.log(array)
                        $.each(array,function(index){
                           	html+="<li><a href='productdetail.html' class='sp'  value="+array[index].id+"><img src="+array[index].src_pic+"></a><h2>"+array[index].name+"</h2><p>¥"+array[index].price+"<span>浏览(70 次)</span></p><a href='#'>"+array[index].shangjia+"</a></li>"
                           	console.log(array[index].id)
                        })
                        $(".list").append(html);
                        $(".list .sp").click(function(){
                            var  _id = $(this).attr("value");
                            console.log(_id)
                            $.cookie.json = true;
                            var _products = $.cookie("products") || [];
                            var index = exists(_id,_products)
                            if (index===-1) {
                            _products.push({
                                id:_id
                            });
                            if (_products.length>=2) {
                                 _products.shift();
                             }
                            }
                            console.log(_products);
                                $.cookie("products",_products,{
                                    expires:7,path:"/"
                            });
                            function exists(_id,array){
                                for (var i = 0; i < array.length; i++) {
                                    if (array[i].id===_id) {
                                        return i;
                                    }
                                }
                                return -1;
                            }
                            console.log(1111111111);
                        });
                    }
      });

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
$(".select a span").click(function(){
	$(this).addClass("sel");
})
$(".sortType a span").click(function(){
	$(".sortType a span").removeClass("sel")
	$(this).addClass("sel");
})
