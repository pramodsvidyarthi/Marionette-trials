var express = require('express');
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname)));
app.use('/good',express.static(path.join(__dirname)+'/js/models/'));
app.engine('html',ejs.renderFile);
app.set('view engine','html');

app.listen(8000,function(){
	console.log("server started");
});