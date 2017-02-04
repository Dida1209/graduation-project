/**
 * Created by lenovo-pc on 2017/2/4.
 */
var mongoose=require('mongoose');

var TestSchema=mongoose.Schema({
    tSubjection:{
        type:String,
        require:true
    },
    tName:{
        type:String,
        require:true
    },
    tBrief:{
        type:String,
        require:true
    },
    tContent:String,
    createAt:{
        type:Date,
        default:Date.now()
    }
})

var Test=mongoose.model('Test',TestSchema);
module.exports=Test;