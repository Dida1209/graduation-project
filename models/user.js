/**
 * Created by lenovo-pc on 2017/1/20.
 */
var mongoose=require('mongoose');
var SALT_WORK_FACTOR=10;
var bcrypt=require('bcryptjs');

var UserSchema=new mongoose.Schema({
    name: {
        unique: true,
        type: String
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        "default": false
    },
    meta: {
        creatAt: {
            type: Date,
            "default": Date.now()
        },
        updateAt:{
            type:Date,
            "default":Date.now()
        }
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

UserSchema.pre('save',function(next){
    let user=this;
    if(this.isnew){
        this.meta.creatAt=this.meta.updateAt=Date.now();
    }
    else{
        this.updateAt=Date.now();
    }
    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
        if(err){
            console.log(err);
        }
        bcrypt.hash(user.password,salt,function(err,hash){
            if(err) return next(err);
            user.password=hash;
            next();
        })
    })
})

UserSchema.methods={
    comparePassword:function(_password,cb){
        bcrypt.compare(_password,this.password,function(err,isMatch){
            if(err){
                return cb(err);
            }else{
                return cb(null,isMatch);
            }
        })
    }
}

var User=mongoose.model('User',UserSchema);
module.exports=User;