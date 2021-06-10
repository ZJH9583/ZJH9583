<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost","root",'',"meizu");
//设置编码
mysqli_set_charset($link,"utf8");

//获取传入的参数
$id=$_GET['id'];
//编写SQL
$sql="select * from list where id=$id";
//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//获取结果集中的数据
$row=mysqli_fetch_assoc($result);
//把数组转为字符串，并响应给浏览器
echo json_encode($row);
//关闭数据库连接
mysqli_close($link);


?>