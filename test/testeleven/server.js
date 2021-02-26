// 1. 引入express
const express = require('express');

// 2.创建对象
const app = express();
// 3.创建路由规则  里面的形参 request与response   (自己可以随便定义名字的)
//  建议写成  request与response  因为可以见名思意，方便自己看
// request  对请求报文的封装
// responst 对响应报文的封装
//  请求路径为'/server'

// 当使用post请求时候会因为发送的信息没有收到对应的结果所以回报错
// 所以该处使用all  表示可以接收任意类型的请求      如get post 等等


// 一：get请求
app.all('/axiosget', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('get请求成功，服务端非json数据返回，返回的是字符串格式.');
});
// 二 ：post请求json数据
app.all('/axiospost', (request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头        *号表示所有的头信息都可以接收
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据   把这个对象返回给浏览器
    const data = {
        name: 'post请求，服务端设置了json格式返回 '
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    setTimeout(()=>{response.send(str);},200);
});
// 三：axios通用ajax请求 json数据
app.all('/axios-server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {
        name: 'axios通用ajax请求的post请求方法，服务端设置了json格式返回'
    };
    let str = JSON.stringify(data);
    setTimeout(()=>{response.send(str);},200);
});



// 4. 监听端口启动服务
// 这里listen(8000)后面添加了一个回调，用来提示，告诉自己是否监听成功
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中......");
});