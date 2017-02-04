/**
 * Created by Dida on 2016/12/20.
 */
var express = require('express');
var port = process.env.port || 3000;
var path = require('path');
var bodyParser = require('body-parser');
var logger=require('morgan');
var app = express();

var cookieParser=require('cookie-parser');
var session=require('express-session');
var mongoStore=require('connect-mongo')(session);

var mongoose=require('mongoose');
var dbUrl="mongodb://localhost/graduation-project";
mongoose.connect(dbUrl);

app.set('views','./views/pages');
app.set('view engine','jade');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true})); //把提交的表单对象格式化

app.use(cookieParser());
app.use(session({
    secret:'graduation-project',
    store:new mongoStore({
        url:dbUrl,
        collection:'sessions'
    })
}))

if(app.get('env')==='development'){
    app.set('showStackError',true);
    app.use(logger('dev'));
    app.locals.pretty=true;
    mongoose.set('debug',true);
}

require('./config/routes')(app);
app.locals.moment=require('moment');
app.listen(port);
app.post('/admin/video/new',function(req,res){
    console.log(req.body);
});
console.log('graduation-project is running on port '+port);