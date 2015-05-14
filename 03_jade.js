var express = require('express')
var port = process.argv[2]
var path = require('path')
var h = process.argv[3]
var app = express();

//app.set('views', path.join(__dirname, h))
app.set('views', h);
app.set('view engine', 'jade')
app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()})
})

app.listen(port)
