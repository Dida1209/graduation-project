/**
 * Created by lenovo-pc on 2017/2/1.
 */
var mongoose = require('mongoose');

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


mongoose.model('comment',commentSchema);