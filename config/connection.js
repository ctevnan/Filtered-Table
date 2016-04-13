var mongoose = require('mongoose');
var db = 'mongodb://localhost/filtered_table_db';

module.exports = mongoose.connect(db);