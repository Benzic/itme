$(function(){
	$("#btn").click(function(){
		if ($("#UserName").val()=="") {
			$(".yh").show();
		}else  if($(".password").val()==""){
			$(".pws").show();
		}else{
			$(".pws").hide();
			$(".yh").hide();
			 $.post("http://localhost/wamp/www/project/php/login.php",{username:$("#UserName").val(),password:$(".password").val()},
		        function(data){
		            if (data.status===1) {
		                console.log("success")
		              window.location = "index.html"
		            }else if(data.status===0){
		               	console.log("failed")
		               	alert("账户和密码错误")
		            }
		     },"json");

		     $.cookie.json = true;
	        _passager = $.cookie("passager") || [];
	         console.log(_passager);
	        _passager.push({
	            name:$("#UserName").val()
	        })      
	        if (_passager.length>=2) {
	                      	_passager.shift();
	        }              
	        console.log(_passager);
	        $.cookie("passager",_passager,{
	                expires:7,path:"/"
	        });
    	}
	})
   
})