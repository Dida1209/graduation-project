/**
 * Created by lenovo-pc on 2017/2/12.
 */
var Test=require('../models/test');

exports.checkin=function(req,res){
    var _test=req.body.test;
    Test.findOne({name:_test.name},function(err,test){
        if(err){
            console.log('findOne'+err);
        }
        if(test){
            console.log('test 重复了'+test);
        }
        else{
            var test=new Test({
                subjection:_test.subjection,
                name:_test.name,
                content:_test.content,
                brief:_test.brief,
            })
            test.save(function(err,test){
                if(err){
                    console.log('test存储出错'+err);
                }
                console.log('test存储成功'+test.content);
                res.redirect('backstage');
            })
        }
    })
}