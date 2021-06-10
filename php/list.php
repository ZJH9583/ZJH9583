<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost","root",'',"meizu");
//设置编码
mysqli_set_charset($link,"utf8");

// 编写SQL语句
$sql='select * from list';
$result=mysqli_query($link,$sql);
// 创建存放所有数据的数组
$arr=[];
// 遍历结果集中每条数据
while($row=mysqli_fetch_assoc($result)){
    array_push($arr,$row);
}
echo json_encode($arr);
mysqli_close($link);

?>