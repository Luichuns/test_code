// 1. 引入express
const express = require('express');

// 2.创建对象
const app = express();

// 3.创建路由规则  里面的形参 request与response   (自己可以随便定义名字的)
//  建议写成  request与response  因为可以见名思意，方便自己看
// request  对请求报文的封装
// responst 对响应报文的封装
//  请求路径为'/server'
app.post('/server', (request, response)=>{
    // 设置响应头 设置允许跨域
    // 头名字为Access-Control-Allow-Origin
    // 头的值为
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('POST请求成功,路由设置为server,响应体为本段文字');

});

// 4. 监听端口启动服务
// 这里listen(8000)后面添加了一个回调，用来提示，告诉自己是否监听成功
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中......");
});