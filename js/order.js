$("#head").load("head.html");
$("#bottom").load("footer.html");
$(function(){

	$.cookie.json = true;
    _passager = $.cookie("passager") || [];
    var lenw = _passager.length;
    var htmlm=""
    console.log(_passager)
    console.log(lenw)
    if (_passager!=[]) {
    	htmlm="<a href='#'>"+_passager[0].name+"</a>";
    	$("#loginw").html("")
    	$("#loginw").append(htmlm)
    	htmlm=""
	}
	var array = $.cookie("buycar") || [];

	console.log(array)
	$.each(array,function(index,element){
		$(".name").text(array[index].name);
		$(".dianjia").text(array[index].dianjia);
		$(".pic").text(array[index].pic);
		$(".amount").text(array[index].amount);
		$(".class").text(array[index].class)
		$(".phone").text("电话："+array[index].phone)
		$(".zong").text("￥"+array[index].amount*array[index].price)
	})
	var isOK = true;
	$(".addresses").click(function(){
		if (isOK==true) {
		isOK = false
		$("#dizhi").slideDown(500);
		// 保存所有地址的对象
			var addresses = {};

			/* 读取 address.json 中的所有省市区信息 */
			$.ajax("http://localhost/wamp/www/project/php/addresses.json").done(function(data){
				var provinces = data.regions;
				provinces.forEach(function(province){
					addresses[province.name] = {}; // 保存省份下城市的对象
					var cities = province.regions || [];
					cities.forEach(function(city){
						addresses[province.name][city.name] = city.regions;
					});
				});

				initProvince();
			});

			// 当省份选择改变时：
			$("#province").change(initCity);
			// 当城市选择改变时：
			$("#city").change(initDistrict);

			// 设置省份的显示信息
			function initProvince() {
				var html = "";
				for (var attr in addresses) {
					html += "<option value='"+attr+"'>"+attr+"</option>";
				}
				$("#province").append(html);

				initCity();

			}

			// 设置选中省份下的城市显示信息
			function initCity() {
				// 当前选中的省份
				var currProvince = $("#province").val();
				// 获取该省份的城市信息，并显示
				var cities = addresses[currProvince],
					html = "";
				for (var attr in cities) {
					html += "<option value='"+ attr +"'>"+ attr +"</option>";
				}
				$("#city").empty().append(html);
				initDistrict();
			}

			// 设置选中省份与城市下的区县信息
			function initDistrict() {
				// 当前选中的省份与城市
				var currProvince = $("#province").val(),
					currCity = $("#city").val(),
					html = "";

				// 显示该选中城市下的区县
				var districts = addresses[currProvince][currCity] || [];
				districts.forEach(function(district){
					html += "<option value='"+ district.name +"'>"+ district.name +"</option>";
				});

				$("#district").empty().append(html);
			}
			$("#Address").val($("#province").val());
			var htmldress = ""
			var isClick = true
			$(".add").click(function(){
				if (isClick==true) {
					$(".box").slideDown(500);
					isClick =false
				}else if (isClick ==false) {
					$(".box").slideUp(500);
					isClick =true
				}
				
			})
			$(".dree").click(function(){
				if ($("#name").val()!=""&&$("#Mobile").val()!=""&&$("#Address").val()!="") {
					htmldress=" <span>"+$("#name").val()+"</span><span class='nress'>"+$("#province").val()+$("#city").val()+$("#district").val()+$("#Address").val()+"</span><span>"+$("#Mobile").val()+"</span><span></span><span><a href='#' class='choose'>选择</a></span>"
					$(".addressUl").append(htmldress)
					$(".choose").click(function(){

						$(".realaddress").text($("#name").val()+"   "+$("#province").val()+$("#city").val()+$("#district").val()+$("#Address").val()+"   "+$("#Mobile").val())
						$("#dizhi").slideUp(500);
						isOK = true;
					})
				}else{
					alert("信息或地址有误请重新填写")
				}
			})
			
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

