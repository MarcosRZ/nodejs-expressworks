var express = require('express')
var port = process.argv[2]
var fs = require('fs')

app = express();

app.get("/books", function (req, res){
	
	var fileContents;
	
	fs.readFile(process.argv[3], function(err, data){
		if (err) throw err;
		res.json(JSON.parse(data));
	});
});

app.listen(port)
