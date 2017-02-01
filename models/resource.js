/**
 * Created by lenovo-pc on 2017/2/1.
 */
var mongoose=require('mongoose');

var resourceSchema = new mongoose.Schema({
    reType:String,  //资源内容
    reName:String,  //资源名字
    brief:String,   //资源简介
    subjection:String,  //资源属性
    //资源内容
    created:{
        type:Date,
        "default":Date.now
    }
    recommendNum:{
        type:Number,
        "default":0
    },
    collectNum:{
        type:Number,
        "default":0
    },
    downloadNum:{
        type:Number,
        "default":0
    },
    comment:[commentSchema]  //subDocument，子文档，即该资源的评论
});

mongoose.model('resource',resourceSchema);