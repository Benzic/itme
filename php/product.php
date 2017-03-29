<?php 

	header("Access-Control-Allow-Origin:*");


	// 先读取文件中的聊天消息
	$file = fopen("data.dat", "r");
	$str = "";
	while(!feof($file)) {
		$str = $str . fgets($file);
	}
	fclose($file);

	if ($action === "read"){ // 读取消息
		echo $str;
		return;
	}

	// 将聊天的消息字符串解码为数组
	$arr = json_decode($str);

	// 将当前获取到的聊天消息添加到数组中
	$str = '{"nickname":"'. $nickname .'","msg":"' . $msg . '"}';
	array_push($arr, json_decode($str));

	// 将数组中所有聊天消息继续存回文件中
	$file = fopen("data.dat", "w");
	fwrite($file, json_encode($arr));
	fclose($file);
?>