<?php
	$username = $_POST["username"];
	$password = $_POST["password"];
	$conn = mysql_connect("localhost:3306","root","");
	if (!$conn) {
		# code...
		die("连接失败了");
	}
	mysql_select_db("vaini");
	$sql = "SELECT * FROM passgers WHERE username = '$username' AND password ='$password'";
	$result = mysql_query($sql,$conn);
	if ($row=mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo '{"status":1,"message":"success","userinfo":'.json_encode($row).'}';
	}else{
		echo '{"status":0,"message":"用户名或者密码错误"}';
	}
	mysql_close($conn);
?>