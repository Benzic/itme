$(function(){
		var products = {
	    lists : [
	        {
	            name: ['卧室家具'],
	            product:['全部', '整体衣帽间', '床', '床垫', '床头柜', '衣柜', '梳妆台','穿衣镜', '衣帽架', '斗柜', '床尾凳', '妆凳', '妆镜', '枕头']
	        },
	        {
	            name:['客厅家具'],
	            product:['全部','罗汉床', '茶几', '壁炉', '视听柜', '隔厅柜', '贵妃椅', '组合柜','电视柜', '沙发', '沙发背柜', '电话架', '装饰柜', '居家椅', '屏风','吊柜']
	        },
	        {
	            name: ['餐厅家具'],
	            product:['全部', '餐桌', '餐椅', '餐车', '餐边柜', '酒柜', '餐桌椅','酒吧台', '酒吧椅']
	        },
	        {
	            name: ['书房家具'],
	            product:['全部', '书桌椅', '书柜', '书报架', '电脑桌']
	        },
	        {     
	            name: ['门厅家具'],
	            product:['全部', '盆景架', '鞋柜', '门柜', '博古架','玄关','交椅']
	        },
	        {
	            name: ['儿童家具'],
	            product:['全部', '儿童椅', '儿童床', '儿童衣柜', '学习书桌','儿童套房']
	        },
	        {
	            name: ['休闲家具'],
	            product: ['全部', '茶桌/茶台', '摇椅', '豆袋沙发', '沙发床','沙滩椅','吊椅','折叠椅','休闲椅','麻将桌']
	        },
	        {
	            name: ['户外家具'],
	            product: ['全部', '凉亭', '帐篷', '秋千', '长椅','花园桌','太阳伞','休闲桌椅','躺椅']
	        },
	        {
	            name: ['酒店家具'],
	            product: ['全部', '酒店卧房', '酒店客厅', '酒店餐厅', '酒店休闲','酒店办公','酒店套房']
	        },
	        {
	            name: ['工程家具'],
	            product: ['全部', '足浴家具', '浴场家具', '咖啡厅家具', '酒吧家具','KTV家具','寺庙家具','茶楼家具','门窗系列','遮阳系列']
	        },
	        {   
	            name: ['红木家具'],
	            product: ['全部', '榆木古典', '茶台', '椅凳', '桌案','床榻','柜架','工艺品','办公台']
	        },
	        {
	            name: ['办公家具'],
	            product: ['全部', '足浴家具', '浴场家具', '咖啡厅家具', '酒吧家具','KTV家具','寺庙家具','茶楼家具','门窗系列','遮阳系列']
	        },
	        {
	            name: ['定制家具'],
	            product: ['全部', '榆木古典', '茶台', '椅凳', '桌案','床榻','柜架','工艺品','办公台']
	        },
	        {
	            name: ['学校用具'],
	            product: ['全部', '盆景架', '鞋柜', '门柜', '博古架','玄关','交椅']
	        }
	    ],
	    others:[
	        {
	           name: '博纳方丹',
	           image:'images/db02da09-a339-4ea5-95b8-d5b0814bece0.jpg'
	        },
	        {
	           name: '欧兰格',
	           image:'images/744cd780-a1b4-404b-b0ed-8656f0f48583.jpg'
	        },
	        {
	           name: '凯旋至尊',
	           image:'images/a4ae95ae-f779-4916-bcb2-574f4d310678.jpg' 
	       },
	       {
	           name: '好风景',
	           image:'images/a4b48f56-cd72-4cb3-ac3a-a739ac180db8.jpg' 
	       }
	       ,{
	           name: '周家公馆家具',
	           image:'images/78f09609-da30-48e7-b343-d1c01c6f8e17.jpg' 
	       }
	       ,{
	           name: '欧柏莱',
	           image:'images/7db45d21-434a-4dcc-a0f4-5e35abfc30e2.jpg' 
	       },{
	           name: '大风范',
	           image:'images/72ed4622-d662-4950-9cca-8a5f27837961.jpg' 
	       }
	       ,{
	           name: '桐趣家具',
	           image:'images/548e7056-a1ee-4dfe-903f-881fd74965d8.jpg' 
	       }
	    ]
	}
	var htmlart = template('thirdNav', products);
	$('.pudownList').html(htmlart);

	var products2 = {
		lists: [
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				],
				[
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["福园佳居"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["华鸿红木"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["假日色恩林"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]},
				   {name:["和木之家"],
				   images:["images/0bdbfc27-9286-4703-8b2e-1c125d289e6a.jpg",
				   "images/ec36c5dd-290a-496d-b821-3d6bfdc7eae9.jpg"]}
				]
			]

	}
	var htmlart2 = template('pro', products2);
	$('.brand_bottom').append(htmlart2);
	$(".brand_left:eq(0)").show();

	var products3={
		lists:[{

			},{
				
			},{
				
			},{
				
			},{
				
			},{
				
			},{
				
			},{
				
			},{
				
			},{
				
			}]
	}
	var htmlart3 = template('pro2', products3);
	$('.product_bottom').html(htmlart3);
	$(".products-box:eq(0)").show();














	$.cookie.json = true;
    _passager = $.cookie("passager") || [];
    var lenw = _passager.length;
    var htmlm=""
    if (_passager!=[]) {
    	htmlm="<a href='#'>"+_passager[0].name+"</a>";
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
