/**
 * Created by lenovo-pc on 2017/2/1.
 */
var User = require('../models/user');

exports.signup=function (req, res) {
    var _user=req.body.user;
    User.findOne({name:_user.name},function(err,user){
        if(err){
            console.log(err);
        }
        if(user){
            console.log('名字重复了');
        }
        else{
            var user=new User(_user);
            user.save(function(err,user){
                if(err){
                    console.log('保存出错');
                }
                console.log(user);
                res.redirect('/');
            })
        }
    })
}
exports.signin=function (req, res) {
    var _user = req.body.user;
    User.findOne({name:_user.name},function(err,user){
        if(err){
            console.log(err);
        }
        if(!user){
            console.log("用户没注册" );
        }else{
            user.comparePassword(_user.password,function(err,isMatch){
                if(err){
                    console.log(err);
                }
                if(isMatch){
                    req.session.user=user;
                    console.log('match'+user);
                    res.redirect('/');
                }else{
                    console.log("no match");
                }
            })
        }
    })
}
exports.loginout=function(req,res){
    delete req.session.user;
    res.redirect('/');
}
exports.ifSignin=function(req,res,next){
    var _user=req.session.user;
    if(!_user){
        console.log('ifSignin 没登录')
        res.redirect('/');
    }
    next();
}
exports.ifAdmin=function(req,res){
    var _user=req.session.user;
    if(_user.isAdmin){
        console.log('ifAdmin 是管理员');
        res.redirect('/admin/bg');
    }
    console.log('ifAdmin 不是管理员');
}