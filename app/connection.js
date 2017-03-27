var mongoose = require('mongoose');
mongoose.connect('mongodb://username:password@serverip:port/db');

module.exports = mongoose.connection;