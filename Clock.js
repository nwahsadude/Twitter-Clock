var Twitter = require('twitter');

function Tweet(){

	client = new Twitter({
		consumer_key: 'rQDSsPdpwKTxqch6QgGRXDEdz',
		consumer_secret: 'pRvMc6gE8lD6tHzJY6eC6E0Kk8bVWP8h5vf9XRukxFRE7OvjbW',
		access_token_key: '13639462-QVfwSnGZLnFzX4VWM2W4UL4TJ6xrDh5QoDOyKp678',
		access_token_secret: 'BCx95FtUcTUsPEyr1ytL370r1RA2Xe1vIrjYWgeiSveFb'
	});


	var client,
		tweet,
		timeText,
		twitterSearch,
		textLength,
		hour;



	timeTextApi = [
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fiveteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
		"twenty",
		"thirty",
		"fourty",
		"fifty",
		"sixty",
		"o'clock"
	];
	timeText = [
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve"
	];

	Tweet.prototype.getHourTweet = function(hours, callback){
		switch (hours) {
			case 0: // 12 AM
				twitterSearch = timeTextApi[11];
				textLength = timeText[11];
				break;
			case 1:
				twitterSearch = timeTextApi[0];
				textLength = timeText[0];
				break;
			case 2:
				twitterSearch = timeTextApi[1];
				textLength = timeText[1];
				break;
			case 3:
				twitterSearch = timeTextApi[2];
				textLength = timeText[2];
				break;
			case 4:
				twitterSearch = timeTextApi[3];
				textLength = timeText[3];
				break;
			case 5:
				twitterSearch = timeTextApi[4];
				textLength = timeText[4];
				break;
			case 6:
				twitterSearch = timeTextApi[5];
				textLength = timeText[5];
				break;
			case 7:
				twitterSearch = timeTextApi[6];
				textLength = timeText[6];
				break;
			case 8:
				twitterSearch = timeTextApi[7];
				textLength = timeText[7];
				break;
			case 9:
				twitterSearch = timeTextApi[8];
				textLength = timeText[8];
				break;
			case 10:
				twitterSearch = timeTextApi[9];
				textLength = timeText[9];
				break;
			case 11:
				twitterSearch = timeTextApi[10];
				textLength = timeText[10];
				break;
			case 12: // 12 PM
				twitterSearch = timeTextApi[11];
				textLength = timeText[11];
				break;
			case 13: // 1 PM
				twitterSearch = timeTextApi[0];
				textLength = timeText[0];
				break;
			case 14:
				twitterSearch = timeTextApi[1];
				textLength = timeText[1];
				break;
			case 15:
				twitterSearch = timeTextApi[2];
				textLength = timeText[2];
				break;
			case 16:
				twitterSearch = timeTextApi[3];
				textLength = timeText[3];
				break;
			case 17:
				twitterSearch = timeTextApi[4];
				textLength = timeText[4];
				break;
			case 18:
				twitterSearch = timeTextApi[5];
				textLength = timeText[5];
				break;
			case 19:
				twitterSearch = timeTextApi[6];
				textLength = timeText[6];
				break;
			case 20:
				twitterSearch = timeTextApi[7];
				textLength = timeText[7];
				break;
			case 21:
				twitterSearch = timeTextApi[8];
				textLength = timeText[8];
				break;
			case 22:
				twitterSearch = timeTextApi[9];
				textLength = timeText[9];
				break;
			case 23:
				twitterSearch = timeTextApi[10];
				textLength = timeText[10];
				break;
			default:
				console.log("Shit be broken yo.");
				break;
		}
	};

	var getMinuteTweet = function(){
		switch (hours) {
			case 0: // 12 AM
				twitterSearch = timeTextApi[11];
				textLength = timeText[11];
				break;
			case 1:
				twitterSearch = timeTextApi[0];
				textLength = timeText[0];
				break;
			case 2:
				twitterSearch = timeTextApi[1];
				textLength = timeText[1];
				break;
			case 3:
				twitterSearch = timeTextApi[2];
				textLength = timeText[2];
				break;
			case 4:
				twitterSearch = timeTextApi[3];
				textLength = timeText[3];
				break;
			case 5:
				twitterSearch = timeTextApi[4];
				textLength = timeText[4];
				break;
			case 6:
				twitterSearch = timeTextApi[5];
				textLength = timeText[5];
				break;
			case 7:
				twitterSearch = timeTextApi[6];
				textLength = timeText[6];
				break;
			case 8:
				twitterSearch = timeTextApi[7];
				textLength = timeText[7];
				break;
			case 9:
				twitterSearch = timeTextApi[8];
				textLength = timeText[8];
				break;
			case 10:
				twitterSearch = timeTextApi[9];
				textLength = timeText[9];
				break;
			case 11:
				twitterSearch = timeTextApi[10];
				textLength = timeText[10];
				break;
			case 12: // 12 PM
				twitterSearch = timeTextApi[11];
				textLength = timeText[11];
				break;
			case 13: // 1 PM
				twitterSearch = timeTextApi[0];
				textLength = timeText[0];
				break;
			case 14:
				twitterSearch = timeTextApi[1];
				textLength = timeText[1];
				break;
			case 15:
				twitterSearch = timeTextApi[2];
				textLength = timeText[2];
				break;
			case 16:
				twitterSearch = timeTextApi[3];
				textLength = timeText[3];
				break;
			case 17:
				twitterSearch = timeTextApi[4];
				textLength = timeText[4];
				break;
			case 18:
				twitterSearch = timeTextApi[5];
				textLength = timeText[5];
				break;
			case 19:
				twitterSearch = timeTextApi[6];
				textLength = timeText[6];
				break;
			case 20:
				twitterSearch = timeTextApi[7];
				textLength = timeText[7];
				break;
			case 21:
				twitterSearch = timeTextApi[8];
				textLength = timeText[8];
				break;
			case 22:
				twitterSearch = timeTextApi[9];
				textLength = timeText[9];
				break;
			case 23:
				twitterSearch = timeTextApi[10];
				textLength = timeText[10];
				break;
			default:
				console.log("Shit be broken yo.");
				break;
		}

	};

	Tweet.prototype.returnTweet = function(hours, callback) {

		this.getHourTweet(hours);

		if (typeof hours === 'function'){
			callback = hours;
			hours = {};
		}

		client.get('search/tweets.json', {q: twitterSearch, count: "1"}, function(error, data) {
			if (error){
				console.log(error);
			}

			if (data){
				tweet = data.statuses[0].text;
				tweetLower = tweet.toLowerCase();
				wordPos = tweetLower.search(textLength);
			} else {
				console.log("No tweets were gotten");
				return;
			}

			if (wordPos == -1) {
				console.log("text not found!");
				console.log(tweet);
				return;
			} else {
				console.log("success");
				hour = {
					Hright: tweetR = tweet.slice(0, wordPos),
					Hcenter: center = tweet.slice(wordPos, wordPos + textLength.length),
					Hleft: tweetL = tweet.slice(wordPos + textLength.length)
				};
			}
		});

			callback(null, hour);
      		return this;
	};


	Tweet.prototype.getTweet = function(hours, callback){
		this.returnTweet(hours, callback);
		// this.thing(hours, callback);

	};

	var init = function(){

	};

	// return {
	// 	getMinuteTweet: getMinuteTweet,
	// 	init: init
	// };

}

module.exports = Tweet;

	




	



	// client.get('search/tweets.json', {
	// 	q: twitterSearch,
	// 	count: "1"
	// }, function(error, params) {
	// 	if (error) {
	// 		console.log(error);
	// 		return;
	// 	}
	// 	tweet = params.statuses[0].text;
	// 	tweetLower = tweet.toLowerCase();
	// 	var wordPos = tweetLower.search(textLength);
	// 	if (wordPos == -1) {
	// 		console.log("text not found!");
	// 		console.log(tweet);
	// 		return;
	// 	} else {
	// 		hour = {
	// 			right: tweetR = tweet.slice(0, wordPos),
	// 			center: center = tweet.slice(wordPos, wordPos + textLength.length),
	// 			left: tweetL = tweet.slice(wordPos + textLength.length)
	// 	};



	// 		res.render('index', {
	// 			title: title,
	// 			hour_center: hour.center,
	// 			hour_right: hour.right,
	// 			hour_left: hour.left
	// 		});
	// 	}
	// });