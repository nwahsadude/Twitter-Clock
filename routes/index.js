var express = require('express');
var Twitter = require('twitter');
var router = express.Router();
var TweetClock = require('../Clock2');
/* GET home page. */
router.get('/', function(req, res) {

	tweet = new TweetClock();
	// tweet.init();

	var time = new Date();
	hours = time.getHours();
	minutes = time.getMinutes();
	time = [hours, minutes];

	tweet.findTime(time, function(err, data){
		var title = "Twitter Clock";
		if (data.length === 2){
		res.render('index', {
			title: title,
			hour_right: data[0].Hright,
			hour_center: data[0].Hcenter,
			hour_left: data[0].Hleft,
			minute_right: data[1].Mright,
			minute_center: data[1].Mcenter,
			minute_left: data[1].Mleft,
		});
			
		} else if (data.length === 3){
			res.render('index', {
				title: title,
				hour_right: data[0].Hright,
				hour_center: data[0].Hcenter,
				hour_left: data[0].Hleft,
				minute_right: data[1].Mright,
				minute_center: data[1].Mcenter,
				minute_left: data[1].Mleft,
				minute2_right: data[2].M2right,
				minute2_center: data[2].M2center,
				minute2_left: data[2].M2left,
			});
		}
	});
});


module.exports = router;