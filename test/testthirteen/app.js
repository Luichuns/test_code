// 一
//创建变量
const dataone ={
    name:'app里面的数据'
} ;
// 执行函数
console.log(dataone);

// 二 所有执行代码在 本app.js文件中
const datatwo ={
    name:'跨源获取http://127.0.0.1:5500/testthirteen/app.js中datatwo的数据'
};
// 数据处理
function handletwo(datatwo){
    // 获取resulttwo 元素
    const resulttwo = document.getElementById('resulttwo');
    resulttwo.innerHTML = datatwo.name;
}
// 执行函数
handletwo(datatwo);


// 三  只传递  变量与执行代码
//                  1.创建变量
//                  2.执行handlethree()函数    
//                  3.另外的填入代码在simpel.html文件中
const datathree ={
    name:'服务端传递了1：变量的值2：执行函数'
};

handlethree(datathree);
