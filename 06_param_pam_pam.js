var express = require('express')
var crypto = require('crypto')

var port = process.argv[2]

var app = express();

app.put("/message/:id", function (req, res){

	var date = new Date().toDateString();
	var id = req.params.id;
	var body = crypto.createHash('sha1').update(date + id).digest('hex');

	res.end(body);
});

app.listen(port)
