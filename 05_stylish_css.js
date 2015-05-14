var express = require('express')
var stylus = require('stylus')
var port = process.argv[2]
var htmlpath = process.argv[3]
var path = require('path')
app = express();

app.use(stylus.middleware(process.argv[3]))

app.use(express.static(process.argv[3]));

app.listen(port)
