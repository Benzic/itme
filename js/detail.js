$("#bottom").load("footer.html");
$("#head").load("head.html");

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

	var flyer = null;
    var _price = null;
    var _pic = null;
    var _name  = null;
    var _id = null;
    var _class = null;
    var count = 0;
    var phone=null;
    var dianjia = null;
    var offset = $("#end").offset();
            $.ajax({
                url:"http://www.bianxia.top/demo/selectmusic/product.php",
                data:{action:"read"},
                success:function(data){
                        var nn = data.substring(213,1512);
                        var inx = nn.indexOf("null");
                        var nar = nn.replace(/,null/gi, "")
                        var array = JSON.parse(nar);
                        var html = "";
                        $.cookie.json = true;
                        console.log(array)
                        var _products = $.cookie("products")||[];
                        $.each(_products,function(index,element){
                            _id=element.id;
                        });
                        console.log(_products)
                        $.each(array,function(index){
                            if(array[index].id==_id){
                                $(".dianjia").text(array[index].shangjia)
                                $(".name").text(array[index].name)
                                $(".phone").html("<img src='images/detail/phone.png'>"+array[index].phone)
                                $(".price").text("¥"+array[index].price)
                                $(".class").text(array[index].class)
                                _price=array[index].price;
                                _pic = array[index].src_pic;
                                _name = array[index].name;
                                _class = array[index].class;
                                phone=array[index].phone;
                                dianjia = array[index].shangjia;
                             	$(".liuyan").text(array[index].liuyan)
                                $(".pic").attr("src",array[index].src_pic)
                                $(".pic1").attr("src",array[index].src_sc1)
                                $(".pic2").attr("src",array[index].src_sc2)
                            }
                            
                               



                        })
                         $(".btn").click(function(e){
                         		count++;
                                    scookie();
                                    var addcar = $(this);
                                    img = _pic;
                                    flyer = $('<img class="u-flyer" style="width:30px; height:30px" src="'+img+'">');
                                    flyer.fly({
                                        start: {
                                            left: event.pageX,
                                            top: event.pageY
                                        },
                                        end: {
                                            left: offset.left+10,
                                            top: offset.top+10,
                                            width: 0,
                                            height: 0
                                        }
                                    })
                                })
                         $("#car").text(count);
                       console.log(count)

                     }
             })

                function scookie(){
                        $.cookie.json = true;
                        var _products = $.cookie("buycar") || [];
                        var index = exists(_id,_products);
                        if (index===-1) {
                        _products.push({
                            id:_id,
                            amount:1,
                            price:_price,
                            pic : _pic,
                            name:_name,
                            class:_class,
                            phone:phone,
                            dianjia:dianjia
                        })
                        console.log(_class)
                        }else{
                            _products[index].amount++;
                        }
                        console.log(_products);
                            $.cookie("buycar",_products,{
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
                }
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

/*$(".imgUpload li input").change(function(){
	var imgs = $(this).val();
	var srcimg = "../images/"+farr(imgs)
	console.log(srcimg);
	$(this).prev("div").css({
		backgroundImage:"url("+srcimg+")",
		backgroundSize:"contain",
		backgroundRepeat:"no-repeat"
	})
})
function farr(element){
	console.log(element)
	var arr = element.split("\\");
	console.log(arr)
	for (var i = 0; i < arr.length; i++) {
		var gflie = arr[arr.length-1];
	}
	return gflie
}*/
var uploadfile={
    change:function(f, element){
    	// var that = this;
    	// console.log(111)
    	// console.log(that)
        for(var i=0;i< f.length;i++){
            var reader=new FileReader();
            reader.readAsDataURL(f[i]);
            reader.onload=function(e){
              $(element).prev("div").css({
					backgroundImage:"url("+e.target.result+")",
					backgroundSize:"contain",
					backgroundRepeat:"no-repeat"
				})

            }
        }

    }
}
