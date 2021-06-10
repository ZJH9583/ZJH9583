var peijianSectionRowUL=document.querySelector(".peijian-section-row-ul")
var menu1Shouji=document.querySelector(".menu1-shouji")
var headerUsers=document.querySelector(".header-users")
var name1=getCookie("name")
a()
b()

async function a(){
    var arr=await promiseAjax({
        url:'../php/zhuye.php'
    })
    
    // 把字符串转化为对象
    arr=eval('('+arr+')')
    // 配置传入的对象信息
        var arr2=arr.slice(11,27)
        // 创建字符串，拼接所有内容
        var str=''
        // 遍历数组中的所有数据
        arr2.forEach(item=>{
            str+=`
            <li>
                        <div class="shouji-small">
                            <a href="./detail.html?id=${item.id}">
                                <img src="${item.picture}" alt="" width="230px" height="230px">
                                <p class="shouji-small-p1">${item.title}</p>
                                <p class="shouji-small-p2">${item.description}</p>
                                <p class="shouji-small-p3">￥${item.price}</p>
                            </a>
                        </div>
                    </li>
            `
        })
        // 把拼接好的内容渲染到页面中
        peijianSectionRowUL.innerHTML=str


    
}
async function b(){
    var arr=await promiseAjax({
        url:'../php/zhuye.php'
    })
    
    // 把字符串转化为对象
    arr=eval('('+arr+')')
    // 配置传入的对象信息
        var arr2=arr.slice(0,8)
        // 创建字符串，拼接所有内容
        var str=''
        // 遍历数组中的所有数据
        arr2.forEach(item=>{
            str+=`
            <li>
            <a href="./detail.html?id=${item.id}" style="color:lightslategray;">
            <img src="${item.picture}">
            <p>${item.title}</p>
            <span>${item.price}元</span>
            </a>
            
        </li>
            `
        })
        // 把拼接好的内容渲染到页面中
        menu1Shouji.innerHTML=str


    
}
if(name1){
    var str3=
    `<p style="color:white;font-size:14px;padding:5px;">您已经登录</p>`
    headerUsers.innerHTML=str3
}else{
    var str4=`
    <img src="../imgs/pic-headeryonghu.png">
                <div class="header-users-link">
                    <a href="./login.html">立即登录</a>
                    <br>
                    <a href="./register.html">立即注册</a>
                    <br>
                </div>
    `
    headerUsers.innerHTML=str4
}
