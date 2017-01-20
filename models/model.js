/**
 * Created by lenovo-pc on 2017/1/20.
 */
var mongoose=require('mongoose');

var userSchema=new mongoose.schema({
    userName=String,
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:boolean,
        "default":false
    },
    created:{
        type:Date,
        "default":true
    },
    myRecommend:{
        resources:[{type:mongoose.Schema.ObjectId,ref:'resource'}],
        "default":[]
    },
    myCollections:{
        resources:[{type:mongoose.Schema.ObjectId,ref:'resource'}],
        "default":[]
    },
    myDownload:{
        resources:[{type:mongoose.Schema.ObjectId,ref:'resource'}],
        "default":[]
    },
    myComment:{
        resources:[{type:mongoose.Schema.ObjectId,ref:'resource'}],
        "default":[]
    }
});

var commentSchema = new mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    created:{
        type:Date,
        "default":Date.now
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',  //引用自用户模型 user model
        require:true
    },
    subComment:[this]
});

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

mongoose.model('user',userSchema);
mongoose.model('resource',resourceSchema);
mongoose.model('comment',commentSchema);