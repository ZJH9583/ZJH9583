// 下拉菜单的js部分
// var headerUlwra=document.querySelector('header-ul-wrap')
// var headerUl=document.querySelector('.header-ul')

// var xialas=document.querySelectorAll('.xiala')
// var xialaps=document.querySelectorAll('.xiala-phone')
// console.log(xialaps);
// var lis1=headerUl.querySelectorAll('li')
// for(let i=0;i<lis1.length;i++){
//     lis1[i].onmouseenter=function(){
//         // xialas[i].style.display="block"
//         xialas[i].style.display='block'
//         // xialaps[i].style.display='block'
//     }
//     lis1[i].onmouseleave=function(){
//         // xialaps[i].style.display="none"
//         xialas[i].style.display='none'

        
//     }
//     // lis1[i].onmouseleave=function(){
//     //     xialas.className=''
//     // }
// }


// 获取操作对象
var row = document.querySelector(".section-shouji-list-ul")
var pagination=document.querySelector(".pagination")
a()

// 通过自执行函数来获取数据
async function a(){
    var arr=await promiseAjax({
        url:'../php/list.php'
    })
    
    // 把字符串转化为对象
    arr=eval('('+arr+')')
    // 配置传入的对象信息
    var ol={
        pageInfo:{
            pagenum:1,
            pagesize:9,
            totalsize:arr.length,
            totalpage:Math.ceil(arr.length/9)
        },
        textInfo:{
            first:"首页",
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        }
    }
    // 实例化分页器对象
    new Pagination(pagination,ol,(m)=>{
        // 通过页码，来进行分页数据显示
        var arr2=arr.slice((m-1)*9,m*9)
        // 创建字符串，拼接所有内容
        var str=''
        // 遍历数组中的所有数据
        arr2.forEach(item=>{
            str+=`
                    <li>
                        <a href="./detail.html?id=${item.id}">
                            <img src="${item.picture}" width="320px"
                            height="320px">
                            <p class="shouoji-p1">${item.title}</p>
                            <p class="shouoji-p2">${item.description}</p>
                            <p class="shouoji-p3">￥${item.price}</p>
                            
                        </a>
                        
                    </li>
            `
        })
        // 把拼接好的内容渲染到页面中
        row.innerHTML=str


    })
}

