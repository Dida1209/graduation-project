/**
 * Created by lenovo-pc on 2017/2/1.
 */
var user=require('../controller/user');

module.exports=function(app) {
//pre heandle user
    app.use(function(req,res,next){
        var _user=req.session.user;
            app.locals.user=_user;
        next();
    })

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

//各种资源点击时(视频、文档、在线测试)
    app.get('/resource', function (req, res) {
        res.render('resource', {});
    });

//视频页+学习目录
    app.get('/video', function (req, res) {
        res.render('video', {});
    });
//文档页+学习目录
    app.get('/doc', function (req, res) {
        res.render('document', {});
    })

//在线测试+学习目录
    app.get('/test', function (req, res) {
        res.render('onlineTest', {});
    });

//概念页(只有学习目录各个知识点被点击时)
    app.get('/bg', function (req, res) {
        res.render('knowledgeSystem', {});
    });

//个人中心
    app.get('/user', function (req, res) {
        res.render('user', {});
    })

}