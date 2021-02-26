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
app.get('/ie', (request, response)=>{
    // 设置响应头 设置允许跨域
    // 头名字为Access-Control-Allow-Origin
    // 头的值为
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头        *号表示所有的头信息都可以接收
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据   把这个对象返回给浏览器
    const data = {
        name: 'setTimeout'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置定时器延时
    // setTimeout(()=>{},3000);
    // 设置响应体
    // response.send(str);
    // 把响应体放进延时器函数里面
    setTimeout(()=>{response.send(str);},3000);

});

// 4. 监听端口启动服务
// 这里listen(8000)后面添加了一个回调，用来提示，告诉自己是否监听成功
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中......");
});