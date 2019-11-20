var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	console.log(req.body);
	res.render('form');
});

app.post('/answer', urlencodedParser, function(req, res){
	res.render('answer', {data: req.body});
});

app.listen(8000);