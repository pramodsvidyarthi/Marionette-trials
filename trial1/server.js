var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.engine('html',require('ejs').__express);
app.set('view engine','html');
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname + '/public')));
app.listen(5000,function()
	{ console.log("Application started"); 
});

app.get('/', function (req, res) {
	res.render('index');
});


var a = [];
app.get('/api',function(req,res){
	for(var i=1;i<=10;i++){
		a.push({
			 id:i,
             firstname:"rob-"+i,
             lastname:"arryn",
             number:23565
		})
	}
	res.json(a);
});

app.put('/api/:id',function(req,res){
	var body = req.body;
	a[req.params.id] = {
		firstname:body.firstname,
	}
	res.json(a[req.params.id]);
})