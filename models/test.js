/**
 * Created by lenovo-pc on 2017/2/4.
 */
var mongoose=require('mongoose');

var TestSchema=mongoose.Schema({
    subjection:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    brief:{
        type:String,
        require:true
    },
    content:String,
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

TestSchema.pre('save',function(){
    this.created=Date.now();

});
var Test=mongoose.model('Test',TestSchema);
module.exports=Test;