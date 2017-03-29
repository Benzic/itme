$(function(){
	$("#btn").click(function(){
		 $.post("http://localhost/wamp/www/project/php/login.php",{username:$("#UserName").val(),password:$(".password").val()},
	        function(data){
	            if (data.status===1) {
	                console.log("success")
	              window.location = "index.html"
	            }else if(data.status===0){
	               	console.log("failed")
	            }
	     },"json");

	     $.cookie.json = true;
        _passager = $.cookie("passager") || [];
         console.log(_passager);
        _passager.push({
            name:$("#UserName").val()
        })                    
        console.log(_passager);
        $.cookie("passager",_passager,{
                expires:7,path:"/"
        });
	})
   
})