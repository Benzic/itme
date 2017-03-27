$("#header").load("head.html");
$("#footer").load("footer.html");
$(function(){
	
})
$("#header").on("click","#checkCity",function(){
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
$("#header").on("click",".more",function(){
	
	$("#pullDown").slideDown(500);
})