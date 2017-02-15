/**
 * Created by lenovo-pc on 2017/2/12.
 */
var Video=require('../models/video');

exports.checkin=function(req,res){
    var _video=req.body.video;
    Video.findOne({content:_video.content},function(err,video){
        if(err){
            console.log('findOne'+err);
        }
        if(video){
            console.log('视频已存在'+video);
            console.log('body的video'+_video.content);
        }
        else{
            var video=new Video({
                subjection:_video.subjection,
                name:_video.name,
                content:_video.content,
                brief:_video.brief
            });
            // var video=new Video(_video);这样写是错的

            // if(video.id!=""){
            //     console.log('video.id 为空'+video);
            // }
            video.save(function(err,video){
                if(err){
                    console.log('视频保存出错'+err);
                }
                console.log('视频保存'+video);
                res.redirect('/backstage');
            })
        }
    })
}