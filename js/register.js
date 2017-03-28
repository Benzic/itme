$(function(){
	$("#UserName").blur(function(){

		var username = $("#UserName").val();
		var str = /^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z0-9]+$/;
		if (username=="") {
			$(".userinfo2").show();
			$(".userinfo").hide()
		}else{
			if (str.test(username)) {
				$(".userinfo").show()
				$(".userinfo2").hide();
			} else{
				
			}
		}
		
	})
	$("#phone").blur(function(){
		var phone = $("#phone").val();
		var str = /^1[34578]\d{9}$/;
		if(phone==""){
			$(".userinfo4").show();
			$(".userinfo3").hide()
		}else{
			if(str.test(phone)){ 
   				$(".userinfo3").show();
				$(".userinfo4").hide()
		    } else{
		    	
		    }
		}
	    
	})
	$(".password1").blur(function(){
		var L_color="rgb(255, 51, 0)",      //低强度的颜色，且只显示在最左边的单元格中  
        M_color="rgb(46, 190, 244)",    //中等强度的颜色，且只显示在左边两个单元格中  
        H_color="rgb(40, 209, 58)";      //高强度的颜色，三个单元格都显示  
        if ($(".password1").val()==null||$(".password1").val()==''){    
           $(".userinfo6").show();
           $(".userinfo5").hide();
           $(".userinfo9").hide();
        }    
        else{    
            var S_level=checkStrong($(".password1").val()); 
            console.log(S_level)   
            switch(S_level) {    
            case 0:    
                $(".userinfo9").show();
                $(".userinfo6").hide();
           		$(".userinfo5").hide();
                break;  
            case 1:    
                $(".userinfo5").show();
                $(".userinfo5 em").css({
                	background:L_color
                })
                $(".userinfo9").hide();
                $(".userinfo6").hide();
                $(".userinfo5 em:eq(2)").text("弱")
                $(".userinfo5 em:eq(1)").text("")
                $(".userinfo5 em:eq(0)").text("") 
                break;    
            case 2:    
                $(".userinfo5").show();
                $(".userinfo5 em").css({
                	background:M_color
                }) 
                $(".userinfo9").hide();
                $(".userinfo6").hide();
               	$(".userinfo5 em:eq(2)").text("")
                $(".userinfo5 em:eq(1)").text("中")
                $(".userinfo5 em:eq(0)").text("") 
                break;    
            default:   
            	$(".userinfo5").show(); 
                $(".userinfo5 em").css({
                	background:H_color
                })
                $(".userinfo9").hide();
                $(".userinfo6").hide();
                $(".userinfo5 em:eq(2)").text("")
                $(".userinfo5 em:eq(1)").text("")
                $(".userinfo5 em:eq(0)").text("强")     
        	}   
        }
	})
	function CharMode(iN){    
        if (iN>=48 && iN <=57) //数字    
            return 1;    
        if (iN>=65 && iN <=90) //大写    
            return 2;    
        if (iN>=97 && iN <=122) //小写    
            return 4;    
        else    
            return 8;     
    }  
    //bitTotal函数    
    //计算密码模式    
    function bitTotal(num){    
        modes=0;    
        for (i=0;i<4;i++){    
            if (num & 1) modes++;    
            num>>>=1;    
        }  
        return modes;    
    }  
    //返回强度级别    
    function checkStrong(sPW){    
        if (sPW.length<6)    
            return 0; //密码太短，不检测级别  
        Modes=0;    
        for (i=0;i<sPW.length;i++){    
            //密码模式    
            Modes|=CharMode(sPW.charCodeAt(i));    
        }  
        return bitTotal(Modes);    
    } 
    $(".password2").blur(function(){
    	var ps1 =  $(".password1").val();
    	var ps2 =  $(".password2").val();
    	if (ps1!=ps2) {
    		$(".userinfo8").show();
			$(".userinfo7").hide()
    	}else{
    		$(".userinfo8").hide();
			$(".userinfo7").show()
    	}
    })
	
})