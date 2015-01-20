var express = require('express');
var Twitter = require('twitter');
var router = express.Router();
var TweetClock = require('../Clock2');
/* GET home page. */
router.get('/', function(req, res) {
	res.render("index.jade");
});


module.exports = router;