/**
 * Created by lenovo-pc on 2017/2/1.
 */
var user=require('../controller/user');
var comment=require('../controller/comment');
var resource=require('../controller/resource');
var video=require('../controller/video');
var test=require('../controller/test');

module.exports=function(app) {
//pre heandle user
    app.use(function(req,res,next){
        var _user=req.session.user;
            app.locals.user=_user;
        next();
    });
//首页--知识体系
    app.get('/', function (req, res) {
        res.render('concept', {});
    });

//登录、注册
    app.post('/user/signup',user.signup);
    app.post('/user/signin',user.signin);
    app.get('/loginout',user.loginout);

//comment
    app.post('/user/comment',user.ifSignin,comment.save);

//搜索供功能

//各种资源列表(视频、文档、在线测试)
    app.get('/videolist',function(req,res){

    })

    app.get('/doclist',function(req,res){

    })

    app.get('/testlist',function(req,res){

    })
//各种资源被点击展示时(视频、文档、在线测试)
    app.get('/video',function(req,res){
        res.render('video',{})
    })

    app.get('/doc', function (req, res) {
        res.render('document', {});
    });

    app.get('/test', function (req, res) {
        res.render('onlineTest', {});
    });
//视频页+学习目录
    app.get('/video/:subjection', function (req, res) {
        res.render('video', {});
    });
//文档页+学习目录
    app.get('/doc/:subjection', function (req, res) {
        res.render('document', {});
    });

//在线测试+学习目录
    app.get('/test/:subjection', function (req, res) {
        res.render('onlineTest', {});
    });

//概念页(只有学习目录各个知识点被点击时)
    app.get('/kd/:subjection', function (req, res) {
        res.render('knowledgeSystem', {});
    });

//个人中心
    app.get('/user', function (req, res) {
        res.render('user', {});
    });
//后台录入
    app.get('/backstage',function(req,res){
        res.render('backstage',{});
    })

//后台video录入
    app.post('/admin/video/new',video.checkin);

//后台test录入
    app.post('/admin/test/new',test.checkin);

//后台resource录入
    app.post('/admin/resource/new',resource.checkin);
};