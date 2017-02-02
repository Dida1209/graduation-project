/* Created by lenovo-pc on 2017/2/1.*/

var mongoose = require('mongoose');
var ObjectId=mongoose.Schema.Types.ObjectId;

var CommentSchema = new mongoose.Schema({
    content:{
        type:String
    },
    created:{
        type:Date,
        "default":Date.now
    },
    userId:{
        type:ObjectId,
        ref:'User' //引用自用户模型 user model
    },
    reply:{
        from:{type:ObjectId,ref:'User'},
        to:{type:ObjectId,ref:'User'},
        content:String
    }
});


var Comment=mongoose.model('Comment',CommentSchema);
module.exports=Comment;