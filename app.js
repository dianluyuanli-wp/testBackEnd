var express=require('express');
var app =express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const apiPrefix = '/api';
 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin",  req.headers.origin);
   res.header("Access-Control-Allow-Credentials", "true");
   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,AccessToken");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});

//  写个测试接口 get请求
app.get(apiPrefix + '/query', async function(req,res){
    res.status(200),
    res.json('SUCCESS! from 广兰路地铁');
});
 
//配置服务端口

let PORT = process.env.PORT || 4000;
var server = app.listen(PORT, function () {
 
    var host = server.address().address;
 
    var port = server.address().port;
    console.log('open success')
 
    console.log('Example app listening at http://%s:%s', host, port);
})