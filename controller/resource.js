var Resource=require('../models/resource');

exports.checkin=function(req,res){
    var _resource=req.body.resource;
    Resource.findOne({subjection:_resource.subjection},function(err,resource){
        if(err){
            console.log('资源查找出错'+err);
        }
        if(resource){
            console.log('findOne 发现已存在资源'+resource);
        }
        else{
            var resource=new Resource({
                subjection:_resource.subjection,
                content:_resource.content
            })
            resource.save(function(err,resour){
                if(err){
                    console.log('资源存储出错'+err);
                }
                console.log('资源已存储'+resour);
                res.redirect('/backstage');
            })
        }
    })
}