// 获取操作对象
// var forms=document.querySelector('form')
// var user=document.querySelector('[name="username]')
// var pwd=document.querySelector('[name=password]')
// var iTexts=document.querySelectorAll('i')
// var user_name=false
// user.onchange=function(){
//     var val=this.value
//     var reg=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
//     if(reg.test(val)){
//         user_name=true
//     }else{
//         iTexts[0].innerHTML="格式错误，请字母开头，允许5-16字节，允许字母数字下划线"
//         user_name=false
//         this.focus()
//     }
// }
// forms.onsubmit=function(){
//     if(user_name){
//         re
//     }
// }

// var checkbox1=document.querySelector('[type="checkbox"]')

var user1=document.querySelector('[name="username"]')
var pass1=document.querySelector('[name="password"]')
var btn=document.querySelector('[type="submit"]')
// 获取地址栏中的参数
var search1=location.search
console.log(search1)
//给选中框绑定点击事件
// checkbox1.onclick=function(){
//     //判断当前选中框是否被选中
//     if(checkbox1.checked){
//         //当选中框被选中时，取消按钮的禁用
//         btn.disabled=false
//     }else{
//         btn.disabled=true
//     }
// }
//给按钮绑定点击事件
btn.onclick=function(){
    //获取输入框中的value值
    var u1=user1.value
    var p1=pass1.value
    console.log(u1,p1)
    //通过ajax来发送请求
    ajax({
        url:'../php/login.php',
        data:`username=${u1}&password=${p1}`,
        success:function(dt){
          console.log(dt)
           //判断当前返回值是否为1
           if(dt==1){
              //保存账号
              console.log(111)
              setCookie('name',u1)
              //判断当前search1是否有值
              if(search1){
                //分割参数
                var url1=search1.split('=')[1]
                //跳转到指定的地址中
                location.href=url1
              }else{
                //跳转到列表页
                location.href="./list.html"
              }
           }else{
               alert("登录失败")
           }
        }
    })
    return false
}