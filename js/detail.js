


/* 渲染数据的js部分 */
var box = document.querySelector(".choosen")
var search1 = location.search
var dt
if (search1) {
    var ar1 = search1.split("=")
    if (ar1[0] == "?id") {
        var id = ar1[1];
        b()
        async function b() {
            dt = await promiseAjax({
                url: '../php/detail.php',
                data: 'id=' + id
            })
            dt = eval('(' + dt + ')')
            var str = `
            <div class="choosen-left">
            <div class="choosen-left-img">
                <img src="${dt.picture}">
                <div class="mark"></div>
            </div>
            <div class="choosen-left-big">
                <img src="${dt.picture}">
            </div>
        </div>
        <div class="choosen-right">
            <div class="choosen-right-hd">
                <h1>${dt.title}</h1>
                <p class="mod-info">
                    <font color="#E03D3D">${dt.description}
                </p>
            </div>
            <div class="choosen-right-shell">
                <div class="shell-price">
                    <span class="small">￥</span>
                    <span id="J_price" class="vm-money">${dt.price}</span>
                </div>
                <!-- 这是选项卡部分 -->
                <div class="property-set">

                    <!-- 这是版本的选择 -->
                    <dl class="property-set-sale" data-property="版本">
                        <dt class="vm-metatit">版本</dt>
                        <dd class="clearfix">
                            <a  href="#" title="全网通公开版 8+128GB">
                                <span>全网通公开版 8+128GB</span>
                            </a>
                            <a  href="#" title="全网通公开版 8+256GB">
                                <span>全网通公开版 8+256GB</span>
                            </a>
                            <a  href="#" title="全网通公开版 12+256GB" class="selected">
                                <span>全网通公开版 12+256GB</span>
                            </a>
                        </dd>
                    </dl>
                    <!-- 这是颜色的选择 -->
                    <dl class="property-set-sale" data-property="颜色">
                        <dt class="vm-metatit">颜色</dt>
                        <dd class="clearfix">
                            <a data-value="3:34452" class="vm-sale-img selected" data-mtype="store_de_sp_2_1"
                                data-bh="click_store_de_sp_2_1" href="#" title="飞雪流光">
                                <img src="https://openfile.meizu.com/group1/M00/08/63/Cgbj0GA-40aAMkhTAAAM1y9S1m8122.png"
                                    width="32" height="32">
                                <span>飞雪流光</span>
                            </a>
                            <a data-value="3:34453" class="vm-sale-img" data-mtype="store_de_sp_2_2"
                                data-bh="click_store_de_sp_2_2" href="#" title="苍穹浩瀚">
                                <img src="https://openfile.meizu.com/group1/M00/08/76/Cgbj0WA-40WAATfqAAATfiGvBAc129.png"
                                    width="32" height="32">
                                <span>苍穹浩瀚</span>
                            </a>
                            <a data-value="3:34454" class="vm-sale-img" data-mtype="store_de_sp_2_3"
                                data-bh="click_store_de_sp_2_3" href="#" title="银河秘境">
                                <img src="https://openfile.meizu.com/group1/M00/08/76/Cgbj0WA-40aASKQOAAASB-CrSVI019.png"
                                    width="32" height="32">
                                <span>银河秘境</span>
                            </a>
                        </dd>
                    </dl>
                   
                    
                </div>
                <!-- 这是选择数量的部分 -->
                <div class="property-control">
                    <div class="vm-metatit">
                        选择数量
                    </div>
                    <div class="mod-control">
                        <a title="减少" href="javascript:;" class="vm-minus disabled">-</a>
                        <input type="text" value="1" id="J_quantity" data-max="3">
                        <a title="增加" href="javascript:;" class="vm-plus">+</a>
                    </div>
                </div>
                <!-- 这是购买加入购物车部分 -->
                <div class="property-buy">
                    <p class="vm-message" id="J_message"></p>
                    <dl class="property-buy-quantity">
                        <dt class="vm-metatit">总计
                        </dt>
                        <dd class="clearfix vm-count">
                            <div class="vm-c-list">
                                <span id="J_property_buy_info">已选：${dt.title}、全网通公开版 12+256GB、飞雪流光、官方标配（不含充电器）、全款、1件</span>
                                <em id="J_property_buy_price">￥${dt.price}</em>
                            </div>
                            <div class="vm-c-list">
                                <span id="J_property_buy_package">官方标配（不含充电器）&nbsp;&nbsp;x 1</span>
                                <em id="J_property_buy_p_price"></em>
                            </div>
                            <div class="vm-c-wp">
                                <strong id="J_totalPrice"><i>￥</i>${dt.price}</strong>
                            </div>
                        </dd>
                    </dl>
                    <div class="property-buy-action">
                        <a  href="../html/cart.html" id="J_btnBuy" class="btn btn-buy btn-primary btn-l" style="display: inline-block;">立即购买</a>
                        <a  href="javascript:void(0);" id="J_btnAddCart" class="btn btn-add-cart btn-empty btn-lg hide" style="display: inline-block;">加入购物车</a>
                        
                    </div>
                        
                </div>

            </div>
        </div>
            `
            box.innerHTML = str
            // 放大镜
            var choosenLeftImg = document.querySelector(".choosen-left-img");
            var mark = document.querySelector(".mark");
            var choosenLeftBig = document.querySelector(".choosen-left-big");
            choosenLeftImg.onmouseover = function () {
                mark.style.display = 'block';
                choosenLeftBig.style.display = 'block';
            }
            // 移出事件
            choosenLeftImg.onmouseout = function () {
                mark.style.display = 'none';
                choosenLeftBig.style.display = 'none';
            }
            choosenLeftImg.onmousemove = function (e) {
                var e = e || window.event;
                var left1 = e.pageX - $(".choosen-left-img").offset().left - ($(".mark").width() / 2);
                console.log(left1)
                var top1 = e.pageY - $(".choosen-left-img").offset().top - ($(".mark").height() / 2);
                // 边界条件
                var maxX = choosenLeftImg.offsetWidth - mark.offsetWidth;
                var maxY = choosenLeftImg.offsetHeight - mark.offsetHeight;
                var imgLeft, imgTop
                // 水平方向的判断
                if (left1 <= 0) {
                    mark.style.left = "0px"
                    imgLeft = 0;
                } else if (left1 >= maxX) {
                    mark.style.left = maxX + 'px'
                    imgLeft = maxX
                } else {
                    mark.style.left = left1 + 'px'
                    imgLeft = left1
                }
                if (top1 <= 0) {
                    mark.style.top = "0px"
                    imgTop = 0
                } else if (top1 >= maxY) {
                    mark.style.top = maxY + 'px'
                    imgTop = maxY
                } else {
                    mark.style.top = top1 + 'px'
                    imgTop = top1
                }
                var img = choosenLeftBig.querySelector("img")
                img.style.left = -2 * imgLeft + 'px'
                img.style.top = -2 * imgTop + 'px'

            }
        }
    } else {
        alert("参数有误")
        location.href = "./list.html"
    }
} else {
    alert("非法进入，请选择商品")
    location.href = "./list.html"
}


// 给大盒子对象绑定点击事件
box.onclick=function(e){
    var e=e||window.event
    var target=e.target||e.srcElement
    console.log(target.innerHTML)
    if(target.innerHTML=="加入购物车"){
        var cartList4=localStorage.getItem("cartList4")||[]
        if(cartList4.length>0){
            cartList4=eval('('+cartList4+')')
            var bool=true
            cartList4.forEach(item=>{
                if(dt.id==item.id){
                    bool=false
                    item.cart_number++
                    localStorage.setItem("cartList4",JSON.stringify(cartList4))
                }
            })
            if(bool){
                dt.cart_number=1
                cartList4.push(dt)
                localStorage.setItem("cartList4",JSON.stringify(cartList4))
            }
        }else{
            dt.cart_number=1
            cartList4.push(dt)
            localStorage.setItem("cartList4",JSON.stringify(cartList4))
        }

    }
}

















/* 放大镜部分的js */
