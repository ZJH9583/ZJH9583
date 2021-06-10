// 获取操作对象
var forms=document.querySelector('form')
var user=document.querySelector('[name="username"]')
var pwd=document.querySelector('[name="password"]')
var pwd1=document.querySelector('[name=pwd]')
var iTexts=document.querySelectorAll('i')
var user_name=false
var pass_pwd=false
var pass_pwd1=false
// 给输入框对象添加失去焦点事件
user.onchange=function(){
    var val=this.value
    // 给正则表达式
    var reg=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
    if(reg.test(val)){
        iTexts[0].innerHTML='√'
        user_name=true
    }else{
        iTexts[0].innerHTML="字母开头，允许5-16字节，允许字母数字下划线"
        user_name=false
        this.focus()
    }
}
// 给设置密码框添加失去焦点事件
pwd.onchange=function(){
    var val=this.value
    var reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/
    if(reg.test(val)){
        iTexts[1].innerHTML="√"
        pass_pwd=true
    }else{
        iTexts[1].innerHTML="包含大小字母和数字组合，可以使用特殊字符，长度在6-16之间"
        this.focus()
        pass_pwd=false
    }
}
// 给确认密码设置失去焦点事件
pwd1.onchange=function(){
    var val=this.value
    var val1=pwd.value
    var reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/
    if(val===val1&&reg.test(val)){
        iTexts[2].innerHTML="√"
        pass_pwd1=true

    }else{
        iTexts[2].innerHTML="两次输入密码不一致"
        this.focus()
        pass_pwd1=false
    }
}
// 给form表单添加提交事件
forms.onsubmit=function(){
    if(user_name&&pass_pwd&&pass_pwd1){
        return true
    }else{
        user.onchange()
        pwd.onchange()
        pwd1.onchange()
        return false
    }
}
