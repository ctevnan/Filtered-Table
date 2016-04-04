var express = require('express');
var logger = require('morgan');

var app = express();

var PORT = process.env.PORT || 3000;

app.use (express.static('public')
app.use (logger('dev'));
var port = 3000;

app.listen(port, function {
  console.log('listening on port:' + port);
});