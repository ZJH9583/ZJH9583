var box=document.querySelector(".cart")
var cartHeader=document.querySelector(".cart-header")
var cartMerchantBody=document.querySelector(".cart-merchant-body")
var cartList4=localStorage.getItem("cartList4")
var name1=getCookie("name")
var cartFooter=document.querySelector(".cart-footer")
if(name1){
    cartList4=eval('('+cartList4+')')
    console.log(cartList4)
    show1()
}else{
    alert("尚未登录，登录")
    var url=location.href
    location.href='../html/login.html?newUrl='+url
}
function show1(){
    if(cartList4.length>0){
        var bool=cartList4.every(item=>{
            return item.is_select==1
        })
        var str2=`
        <tbody>
                    <tr>
                        <td class="cart-col-select">
                            <div class="cart-select-all">
                                <input type="checkbox" name="quan" ${bool?"checked":''} class="mz-checkbox">
                                <span class="cart-select-title">全选</span>
                            </div>
                        </td>
                        <td class="cart-col-price">单价（元）</td>
                        <td class="cart-col-number">数量</td>
                        <td class="cart-col-total">小计（元）</td>
                        <td class="cart-col-ctrl">编辑</td>
                    </tr>
                </tbody>
        `
        cartHeader.innerHTML=str2
        var str3=''
        cartList4.forEach(item=>{
           str3+=`
            <tr class="cart-product">
                            <td class="cart-col-select">
                                <!-- 选框 -->
                                <!-- 单选框 -->
                                <input type="checkbox" name="xuan" class="mz-checkbox" ${item.is_select==1?"checked":''} data-id=${item.id}>
                                <a  class="cart-product-link" target="_blank" >
                                    <img  class="cart-product-img"  src="${item.picture}" style="display: inline;">
                                </a>
                                <a class="cart-product-link cart-product-info" target="_blank" >
                                    <p class="cart-product-item-name">${item.title}</p>
                                    <p class="cart-product-desc">全网通公开版 踏雪 8+128GB</p>
                                </a>
                            </td>
                            <td class="cart-col-price">
                                <p>
                                    <span class="cart-product-price">${item.price}</span>
                                  </p>
                            </td>
                            <td class="cart-col-number">
                                    <div class="cart-product-number-adder">
                                        <p class="cart-product-number-max">限购3件</p>
                                        <div class="mz-adder">
                                           <button class="mz-adder-subtract" ${item.cart_number<=1?"disabled":''} data-id=${item.id}>-</button>
                                           <div class="mz-adder-num"><span class="mz-adder-input">${item.cart_number}</span></div>
                                           <button class="mz-adder-add" ${item.cart_number>=item.number?"disabled":''} data-id=${item.id}>+</button>
                                        </div>
                                    </div>
                            </td>
                            <td class="cart-col-total">
                                <span class="cart-product-price total main-goods">${item.cart_number*item.price}</span>
                            </td>
                            <td class="cart-col-ctrl">
                                <button data-id=${item.id}>删除</button>
                            </td>
                        </tr>

            `
        })
        cartMerchantBody.innerHTML=str3

        var str4=''
        str4+=`
        <div class="mzcontainer">
                <div class="cart-footer-left">
                    <div class="cart-select-all">
                        <input type="checkbox" name="quan"  ${bool?"checked":''} class="mz-checkbox">
                        <span class="cart-select-title">全选</span>
                    </div>
                    <button class="cart-remove-selected">清空购物车</button>
                    
                    <span class="cart-footer-count">
                        共<span class="cart-footer-num" id="totalCount">${total()[0]}</span>件商品，
                      
                    </span>
                </div>
                <div class="cart-footer-right">
                    <span class="cart-footer-sum">
                        已优惠<span class="cart-footer-num red" id="totalDiscount">0.00</span>元，
                        合计(不含运费)：<span class="cart-footer-total" id="totalPrice">${total()[1]}</span>
                    </span>
                    <div class="to-order-btn">去结算</div>
                </div>
            </div>
        `
        cartFooter.innerHTML=str4
    }else{
        var str2=`
        <tbody>
                    <tr>
                        <td class="cart-col-select">
                            <div class="cart-select-all">
                                <input type="checkbox" name="quan" ${bool?"checked":''} class="mz-checkbox">
                                <span class="cart-select-title">全选</span>
                            </div>
                        </td>
                        <td class="cart-col-price">单价（元）</td>
                        <td class="cart-col-number">数量</td>
                        <td class="cart-col-total">小计（元）</td>
                        <td class="cart-col-ctrl">编辑</td>
                    </tr>
                </tbody>
        `
        cartHeader.innerHTML=str2
        
        var str=`
        
        <div class="jumbotron">
            <h1>您的购物车空空如也</h1>
            <p>点击下方按钮快去选购吧! ^_^</p>
            <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去逛逛吧</a></p>
        </div>
        `
        //把当前字符串渲染到页面中
        cartMerchantBody.innerHTML=str


        var str4=''
        str4+=`
        <div class="mzcontainer">
                <div class="cart-footer-left">
                    <div class="cart-select-all">
                        <input type="checkbox" name="quan"  ${bool?"checked":''} class="mz-checkbox">
                        <span class="cart-select-title">全选</span>
                    </div>
                    <button class="cart-remove-selected">清空购物车</button>
                    
                    <span class="cart-footer-count">
                        共<span class="cart-footer-num" id="totalCount">${total()[0]}</span>件商品，
                      
                    </span>
                </div>
                <div class="cart-footer-right">
                    <span class="cart-footer-sum">
                        已优惠<span class="cart-footer-num red" id="totalDiscount">0.00</span>元，
                        合计(不含运费)：<span class="cart-footer-total" id="totalPrice">${total()[1]}</span>
                    </span>
                    <div class="to-order-btn">去结算</div>
                </div>
            </div>
        `
        cartFooter.innerHTML=str4
    }
}

// $('.cart').click(function(e){
//     // 获取目标对象
//     var target=e.target
//     // 全选target是dom对象
//     if(target.name=="quan"){
//        //  获取所有选中框对象，并遍历每个选中框对象
//        $('[name="xuan"]').each(function(i,item){
//            if(target.checked){
//                $(item).prop('checked',true)
//            }else{
//                $(item).prop('checked',false)
//            }
//        })
//        total2()
//     }
//    //  单选框
//    if(target.name=='xuan'){
//        danxuan()
//        total2()
//    }
//    // 加法
//    if(target.innerHTML=="+"){
//        // 获取数量
//        var num=$($(target).prev().children()[0]).html()

//        console.log(num)
//        num++
//        // 重新给数量赋值
//        $($(target).prev().children()[0]).html(num)
//        // 获取当前商品的table对象
//        var table=$(target).parents('.cart-col-number')
//        // 获取当前商品的单价
//        var price=$($(table).prev('.cart-col-price').children()[0]).find('span').html()
//        // 计算小计
//        var xiaoji=num*price
//        // 重新给小计赋值
//        $(table.next()).find('span').html(xiaoji)
      
//        total2()
//    }
//    // 减法
//    if(target.innerHTML=="-"){
//        // 获取数量
//        var num=$($(target).next().children()[0]).html()
//        // 判断当前数量
//        if(num<=1){
//            num=1
//        }else{
//            num--
//        }
//        $($(target).next().children()[0]).html(num)
//        // 获取当前商品的table对象
//        var table=$(target).parents('.cart-col-number')
//        // 获取单价
//        var price=$(table.prev('.cart-col-price').children()[0]).find('span').html()
//        // 计算小计
//        var xiaoji=num*price
//        // 重新给小计赋值
//        $(table.next()).find('span').html(xiaoji)
      
//        total2()
//    }
//    // 删除
//    if(target.innerHTML=="删除"){
//        $(target).parents('.cart-product').remove()
//        danxuan()
//        total2()
//    }
//    // 删除选中商品
//    if(target.innerHTML=="删除选中的商品"){
//        $('.cart-product').each(function(i,item){
//            console.log(item)
//            if($($(item).children()[0]).children()[0].checked){
//                console.log(item)
//                $(item).remove()
//            }

//        })
//        if($('.cart-product').length==0){
//            console.log(111)
//            console.log( $('.cart-tips'))
//            $('.cart-tips')[0].style.display="block"
//        }
//        danxuan()
//        total2()
//    }
// })
// function danxuan(){
//    var m=0//被选中的商品
//    $('[name="xuan"]').each((i,item)=>{
//        // 判断当前单选框是否被选中
//        if(item.checked){
//            m++
//        }
//    })
//    // 判断单选框被选中次数，是否等于该长度
//    if($('[name="xuan"]').length==m&&$('[name="xuan"]').length!=0){
//        $('[name="quan"]').prop('checked',false)
//    }else{
//        $('[name="quan"]').prop('checked',false)
//    }
// }
// // 店铺合计
// function total2(){
//    var num=0
//    // 获取所有的商品，并进行遍历
//    $(".cart-product").each((i,item)=>{
//        // 判断当前商品是否被选中
//        if($(item).find('[name="xuan"]').prop('checked')){
//            // 获取当前商品的小计
//            var xiaoji=$($(item).children()[3]).find('span').html()
//            num+=parseFloat(xiaoji)
//        }
//    })
//    $('.cart-footer-sum').find('.cart-footer-total').html(num)
// }
// total2()


































   













box.onclick=function(e){
    //事件对象兼容
    var e = e || window.event
    //目标对象兼容
    var target=e.target || e.srcElement
    //判断点击的是否为加法按钮
    if(target.innerHTML=='+'){
        //获取当前操作对的id属性值
        var id=target.getAttribute("data-id")
        //操作cartList4中指定的数据
        cartList4.forEach(item=>{
            //判断是否为当前要操作的商品
            if(item.id==id){
                item.cart_number++
            }
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //减法
    if(target.innerHTML=='-'){
        //获取id
        var id=target.getAttribute("data-id")
         //操作cartList4中指定的数据
         cartList4.forEach(item=>{
            //判断是否为当前要操作的商品
            if(item.id==id){
                item.cart_number--
            }
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //删除
    if(target.innerHTML=="删除"){
        //获取id属性值
        var id=target.getAttribute("data-id")
        cartList4=cartList4.filter(item=>{
            return item.id!=id
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //判断是否为全选框
    if(target.name=="quan"){
        //遍历所有商品
        cartList4.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //判断点击的是否为选中框对象
    if(target.name=="xuan"){
        //获取当前选中框对象的id属性
        var id=target.getAttribute('data-id')
        //遍历数组元素
        //遍历所有商品
        cartList4.forEach(item=>{
           //判断是否为当前要操作的商品
           if(item.id==id){
               //判断当前商品中is_select是否等于1
               if(item.is_select==1){
                    item.is_select=0
               }else{
                    item.is_select=1
               }
           }
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //去结算
    if(target.innerHTML=='去结算'){
        alert("你已支付："+total()[1])
        //过滤不满足条件的商品
        cartList4=cartList4.filter(item=>{
            return item.is_select!=1
        })
        //把修改完毕的cartList4重新存储在localStorage中
        localStorage.setItem("cartList4",JSON.stringify(cartList4))
        show1()
    }
    //清空购物车
    if(target.innerHTML=="清空购物车"){
         cartList4=[]
         //把修改完毕的cartList4重新存储在localStorage中
         localStorage.setItem("cartList4",JSON.stringify(cartList4))
         show1()
    }
}

//计算所选商品价格和数量
function total(){
    var nums=0 //所选商品数量
    var prices=0 //所选商品价格
    //遍历所有商品
    cartList4.forEach(item=>{
        //判断当前商品是否被选中
        if(item.is_select==1){
            nums+=item.cart_number
            prices+=parseFloat(item.price)*parseInt(item.cart_number)
        }
    })
    return [nums,prices]
}
// function total1(){
//     var number1=0
//     var price1=0
//     number1+=item.cart_number
//     price1+=parseFloat(item.price)*parseInt(item.cart_number)
//     return price1

// }
