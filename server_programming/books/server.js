var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://davidk:david90istheMAN@ds151232.mlab.com:51232/restful_david');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var router = require('./router.js');
app.use('/api',router);

module.exports = app;

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Lets go! ' + port);