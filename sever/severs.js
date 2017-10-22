let express = require('express');
let session=require('express-session');
let bodyParser=require('body-parser');


//首页轮播图数据
let sliders = require('./mock/sliders');
//首页列表数据
let lessons = require('./mock/lessons');
//获取列表信息接口
//订单页数据
let orderList = require('./mock/OrderList');

let app = express();
app.use(bodyParser.json());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'mm'
}));
app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:8080");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    res.header('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', "true");
    if (req.method == 'OPTIONS') {
        res.end('');
    } else {
        next();
    }
});

//获取轮播图数据接口
app.get('/sliders',function (req,res) {
   res.json(sliders)
});
//获取列表信息接口
app.get('/lessons',function (req,res) {
   res.send(lessons);
});
/*//获取列表数据
let lists=require('./mock/lists');
app.get('/list',function (req,res) {
    res.json(lists)
});*/
//获取列表数据 10-20更新
let lists=require('./mock/lists');
let list1=require('./mock/list1');
let list2=require('./mock/list2');
let list3=require('./mock/list3');
let list4=require('./mock/list4');
app.get('/list',function (req,res) {
    let {types,limit}=req.query;
    console.log(req.query);
    if(types==1){
        res.json(list1)
    }else if(types==2){
        res.json(list2)
    }else if(types==3){
        res.json(list3)
    }else if(types==4){
        res.json(list4)
    }else{
        res.json(lists)
    }
});


//获取列表页信息
app.get('/order',function (req,res) {
    res.send(orderList);
});

let users = [];
//获取登录信息接口
app.post('/login',function (req,res) {
    let user=req.body;
    let oldUser=users.find((item,index)=>item.username===user.username&&item.password===user.password);
    if(oldUser){
        req.session.user=user;//把用户写入到会话中
        console.log(req.session.user);
        res.json({code:0,success:'登录成功',user})
    }else {
        res.json({code:1,success:'登录失败',user})
    }
});
//获取注册信息接口
app.post('/register',function (req,res) {
    let user=req.body;
    console.log(user);//请求到的数据
    let oldUser=users.find((item,index)=>item.username==user.username);
    if(oldUser){
        console.log(oldUser,'oo');
        res.json({code:1,error:'用户名重复'});
    }else{
        // console.log(1);
        users.push(user);
        res.json({code:0,success:'恭喜你，注册成功'})
    }
});
app.listen(3000,function () {
   console.log('监听3000端口')
});

