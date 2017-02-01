/**
 * Created by Dida on 2016/12/20.
 */
var express = require('express');
var port = process.env.port || 3000;
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var mongoose=require('mongoose');
var dbUrl="mongodb://localhost/graduation-project";
mongoose.connect(dbUrl);

app.set('views','./views/pages');
app.set('view engine','jade');
app.listen(port);

console.log('graduation-project is running on port '+port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); //把提交的表单对象格式化
app.use(express.static(path.join(__dirname, '/public')));

require('./config/routes')(app);