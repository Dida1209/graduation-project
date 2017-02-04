/**
 * Created by lenovo-pc on 2017/2/4.
 */
var mongoose=require('mongoose');

var VideoSchema=new mongoose.Schema({
    vSubjection:{
        type:String,
        require:true
    },
    vName:{
        type:String,
        require:true
    },
    vBrief:{
        type:String,
        require:true
    },
    vContent:String,
    createAt:{
        type:Date,
        default:Date.now()
    },
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
    }
});

var Video=mongoose.model('Video',VideoSchema);
module.exports=Video;