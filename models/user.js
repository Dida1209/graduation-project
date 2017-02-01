/**
 * Created by lenovo-pc on 2017/1/20.
 */
var mongoose=require('mongoose');

var userSchema=new mongoose.schema({
    name:{
        unique:true,
        type:String
    },
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
        "default":Date.now()
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

mongoose.model('user',userSchema);