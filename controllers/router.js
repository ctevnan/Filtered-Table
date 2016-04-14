var express = require('express');

var router = express.Router();

//models
//var User = require('/models/user.js');

//home
router.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


module.exports = router;