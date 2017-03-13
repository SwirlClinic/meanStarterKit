//Required packages
var express = require('express');


//Routes for the api
var router = express.Router();
var path = require('path');
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/ayy');

module.exports = router;