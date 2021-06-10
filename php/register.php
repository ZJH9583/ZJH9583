<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost","root",'',"meizu");
//设置编码
mysqli_set_charset($link,"utf8");
// 获取传入的参数
$n=$_POST['username'];
$p=$_POST['password'];
// 编写SQL语句
$sql="insert into users(name,password) values('$n','$p')";
// 执行SQL语句
$result=mysqli_query($link,$sql);
// 判断当前数据是否添加成功
if($result){
    // echo "注册成功";
    // header("location:../html/login.html");
    echo "<script>alert('注册成功');location.href='../html/login.html'</script>";
}else{
    // echo "注册失败";
    echo "<script>alert('注册败');location.href='../html/register.html'</script>";
}
// 关闭数据库链接
mysqli_close($link);
?>