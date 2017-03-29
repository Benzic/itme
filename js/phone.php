<?php
	$phone = $_POST["phone"];
	$conn = mysql_connect("localhost:3306","root","");
	if (!$conn) {
		# code...
		die("连接失败了");
	}
	mysql_select_db("vaini");
	$sql = "SELECT * FROM  `passgers` WHERE username = $username ";
	$result = mysql_query($sql,$conn);
	if ($result) {
		echo '{"status":1,"message":"success"}';
	}else{
		echo '{"status":0,"message":"failed"}';
	}
	mysql_close($conn);
?>