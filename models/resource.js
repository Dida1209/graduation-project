/**
 * Created by lenovo-pc on 2017/2/1.
 */
var mongoose=require('mongoose');

var ResourceSchema = new mongoose.Schema({
    reName:String,  //资源名字
    subjection:String,  //资源属性
    reContent:String,
    created:{
        type:Date,
        "default":Date.now()
    }
    //comment:[commentSchema]  //subDocument，子文档，即该资源的评论
});

ResourceSchema.pre('save',function(){
        this.created=Date.now();

});
var Resource=mongoose.model('Resource',ResourceSchema);
module.exports=Resource;