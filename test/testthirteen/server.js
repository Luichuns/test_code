// 1. 引入express
const express = require('express');
// 2.创建对象
const app = express();
// 3.创建路由规则  里面的形参 request与response   (自己可以随便定义名字的)
//  建议写成  request与response  因为可以见名思意，方便自己看
// request  对请求报文的封装
// responst 对响应报文的封装
//  请求路径为'/server'

// 一：访问simpel.html页面的路径为[127.0.0.1:8000/one]
app.all('/one', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    // 使用sendFile()函数发送
    // 启动服务端后，直接访问127.0.0.1:8000端口返回一个simpel.html模板页面
    // __dirname:意思是绝对路径,本服务端启动文件的位置
    response.sendFile(__dirname +'/simpel.html');
});

// 二：访问[127.0.0.1:8000/two]路径获取字符串数据
app.all('/two', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('127.0.0.1:8000/two链接返回来的字符串格式数据');
});
// html第五个标签获取的数据
app.all('/five', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send("console.log('第五个script标签链接，这里返回去给浏览器的是一个执行类型的json代码，而不是数据')");
});
// html第六个标签获取数据
app.all('/six',(request,response)=>{
    const datasix = {
        name: 'fetch函数通用ajax请求的post请求方法，服务端设置了json格式返回'
    };
    // 把数据转化为字符串
    let str = JSON.stringify(datasix);
    // 下面这里的代码注意了[`]为键盘esc下方的符号
    response.end(`handlesix(${str})`);
});



// 4. 监听端口启动服务
// 这里listen(8000)后面添加了一个回调，用来提示，告诉自己是否监听成功
app.listen(8000, ()=>{
    console.log("本条信息为回调，说明服务已经启动，8000端口监听中......");
});