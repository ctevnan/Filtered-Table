var express = require('express');
var logger = require('morgan');
var app = express();

app.use express.static(__)
app.use (logger('dev'));
var port = 3000;

app.listen(port, function {
  console.log('listening on port:' + port);
});