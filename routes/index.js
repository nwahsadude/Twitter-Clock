//var express = require('express');
//var router = express.Router();
///* GET home page. */
//router.get('/', function(req, res) {
//	res.render("index.jade");
//});
//
//router.get('/stats', function(req, res){
//	res.render('stats.jade', {data: clients});
//});
//
//module.exports = router;

module.exports = function(router, clients){

	router.get('/', function(req, res) {
		res.render("index.jade");
	});

	router.get('/stats', function(req, res){
		res.render('stats.jade', {data: clients});
	});

}