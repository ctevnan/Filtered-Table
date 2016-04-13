var express = require('express');
var logger = require('morgan');
var db = require('./config/connection.js');
var PORT = process.env.PORT || 3000;

var app = express();

//middleware
app.use (logger('dev'));
app.use (express.static('public'));

//routes
var routes = require('./controllers/router.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('listening on ', PORT);
});