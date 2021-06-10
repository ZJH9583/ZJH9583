<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost","root",'',"meizu");
//设置编码
mysqli_set_charset($link,"utf8");
//获取传入的参数
$u=$_GET['username'];
$p=$_GET['password'];
//SQL语句   
$sql="select * from users where name='$u' and password='$p'";
//执行SQL语句
$result=mysqli_query($link,$sql);
//判断结果集中是否有数据
if($row=mysqli_fetch_row($result)){
    echo "1";
}else{
    echo "0";
}
//关闭数据库连接
mysqli_close($link);
?>