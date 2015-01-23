var Twit = require('twit');


function TweetClock(){
	client = new Twit({

	});

	var	client,
		data = [],
		tweetStorage = [],
		timeStrings = [
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
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
		"twenty",
		"thirty",
		"forty",
		"fifty",
		"sixty",
		"o'clock"
	];




	TweetClock.prototype.findTimeText = function(params, callback){
		// This is where it will be getting the strings of the time
		// params [hour, minutes]
		if (typeof params === 'function'){
			callback = params;
			params = {};
		}
		var data = [];
		
		switch (params[0]) {
			case 0: // 12 AM
				data.push(tweetStorage[11]);
				break;
			case 1:
				data.push(tweetStorage[0]);
				break;
			case 2:
				data.push(tweetStorage[1]);
				break;
			case 3:
				data.push(tweetStorage[2]);
				break;
			case 4:
				data.push(tweetStorage[3]);
				break;
			case 5:
				data.push(tweetStorage[4]);
				break;
			case 6:
				data.push(tweetStorage[5]);
				break;
			case 7:
				data.push(tweetStorage[6]);
				break;
			case 8:
				data.push(tweetStorage[7]);
				break;
			case 9:
				data.push(tweetStorage[8]);
				break;
			case 10:
				data.push(tweetStorage[9]);
				break;
			case 11:
				data.push(tweetStorage[10]);
				break;
			case 12: // 12 PM
				data.push(tweetStorage[11]);
				break;
			case 13: // 1 PM
				data.push(tweetStorage[0]);
				break;
			case 14:
				data.push(tweetStorage[1]);
				break;
			case 15:
				data.push(tweetStorage[2]);
				break;
			case 16:
				data.push(tweetStorage[3]);
				break;
			case 17:
				data.push(tweetStorage[4]);
				break;
			case 18:
				data.push(tweetStorage[5]);
				break;
			case 19:
				data.push(tweetStorage[6]);
				break;
			case 20:
				data.push(tweetStorage[7]);
				break;
			case 21:
				data.push(tweetStorage[8]);
				break;
			case 22:
				data.push(tweetStorage[9]);
				break;
			case 23:
				data.push(tweetStorage[10]);
				break;
			default:
				console.log("Hour be broken yo.");
				break;
		}
		// console.log(params[1]);
		switch (params[1]) {
			case 0: 
				data.push(tweetStorage[24]);
				break;
			case 1: 
				data.push(tweetStorage[0]);
				break;
			case 2: 
				data.push(tweetStorage[1]);
				break;
			case 3: 
				data.push(tweetStorage[2]);
				break;
			case 4: 
				data.push(tweetStorage[3]);
				break;
			case 5: 
				data.push(tweetStorage[4]);
				break;
			case 6: 
				data.push(tweetStorage[5]);
				break;
			case 7: 
				data.push(tweetStorage[6]);
				break;
			case 8: 
				data.push(tweetStorage[7]);
				break;
			case 9: 
				data.push(tweetStorage[8]);
				break;
			case 10: 
				data.push(tweetStorage[9]);
				break;
			case 11: 
				data.push(tweetStorage[10]);
				break;
			case 12: 
				data.push(tweetStorage[11]);
				break;
			case 13: 
				data.push(tweetStorage[12]);
				break;
			case 14: 
				data.push(tweetStorage[13]);
				break;
			case 15: 
				data.push(tweetStorage[14]);
				break;
			case 16: 
				data.push(tweetStorage[15]);
				break;
			case 17: 
				data.push(tweetStorage[16]);
				break;
			case 18: 
				data.push(tweetStorage[17]);
				break;
			case 19: 
				data.push(tweetStorage[18]);
				break;
			case 20: 
				data.push(tweetStorage[19]);
				break;
			case 21: 
				data.push(tweetStorage[19]);
				break;
			case 22: 
				data.push(tweetStorage[19]);
				data.push(tweetStorage[1]);
				break;
			case 23: 
				data.push(tweetStorage[19]);
				data.push(tweetStorage[2]);
				break;
			case 24: 
				data.push(tweetStorage[19]);
				data.push(tweetStorage[3]);
				break;
			case 25: 
				data.push(tweetStorage[19]);
				data.push(tweetStorage[4]);
				break;
			case 26: 
				data.push(tweetStorage[19]);
				data.push(tweetStorage[5]);
				break;
			case 27: 
				data.push(tweetStorage[19]);
				data.push(tweetStorage[6]);
				break;
			case 28: 
				data.push(tweetStorage[19]);
				data.push(tweetStorage[7]);
				break;
			case 29: 
				data.push(tweetStorage[19]);
				data.push(tweetStorage[8]);
				break;
			case 30: 
				data.push(tweetStorage[19]);
				data.push(tweetStorage[9]);
				break;
			case 31: 
				data.push(tweetStorage[20]);
				break;
			case 32: 
				data.push(tweetStorage[20]);
				data.push(tweetStorage[1]);
				break;
			case 33: 
				data.push(tweetStorage[20]);
				data.push(tweetStorage[2]);
				break;
			case 34: 
				data.push(tweetStorage[20]);
				data.push(tweetStorage[3]);
				break;
			case 35: 
				data.push(tweetStorage[20]);
				data.push(tweetStorage[4]);
				break;
			case 36: 
				data.push(tweetStorage[20]);
				data.push(tweetStorage[5]);
				break;
			case 37: 
				data.push(tweetStorage[20]);
				data.push(tweetStorage[6]);
				break;
			case 38: 
				data.push(tweetStorage[20]);
				data.push(tweetStorage[7]);
				break;
			case 39: 
				data.push(tweetStorage[20]);
				data.push(tweetStorage[8]);
				break;
			case 40: 
				data.push(tweetStorage[20]);
				data.push(tweetStorage[9]);
				break;
			case 41: 
				data.push(tweetStorage[21]);
				break;
			case 42: 
				data.push(tweetStorage[21]);
				data.push(tweetStorage[1]);
				break;
			case 43: 
				data.push(tweetStorage[21]);
				data.push(tweetStorage[2]);
				break;
			case 44: 
				data.push(tweetStorage[21]);
				data.push(tweetStorage[3]);
				break;
			case 45: 
				data.push(tweetStorage[21]);
				data.push(tweetStorage[4]);
				break;
			case 46: 
				data.push(tweetStorage[21]);
				data.push(tweetStorage[5]);
				break;
			case 47: 
				data.push(tweetStorage[21]);
				data.push(tweetStorage[6]);
				break;
			case 48: 
				data.push(tweetStorage[21]);
				data.push(tweetStorage[7]);
				break;
			case 49: 
				data.push(tweetStorage[21]);
				data.push(tweetStorage[8]);
				break;
			case 50: 
				data.push(tweetStorage[21]);
				data.push(tweetStorage[9]);
				break;
			case 51: 
				data.push(tweetStorage[22]);
				break;
			case 52: 
				data.push(tweetStorage[22]);
				data.push(tweetStorage[1]);
				break;
			case 53: 
				data.push(tweetStorage[22]);
				data.push(tweetStorage[2]);
				break;
			case 54: 
				data.push(tweetStorage[22]);
				data.push(tweetStorage[3]);
				break;
			case 55: 
				data.push(tweetStorage[22]);
				data.push(tweetStorage[4]);
				break;
			case 56: 
				data.push(tweetStorage[22]);
				data.push(tweetStorage[5]);
				break;
			case 57: 
				data.push(tweetStorage[22]);
				data.push(tweetStorage[6]);
				break;
			case 58: 
				data.push(tweetStorage[22]);
				data.push(tweetStorage[7]);
				break;
			case 58: 
				data.push(tweetStorage[22]);
				data.push(tweetStorage[8]);
				break;
			case 59: 
				data.push(tweetStorage[22]);
				data.push(tweetStorage[8]);
				break;
			default:
				console.log("Minutes be broken!");
				break;
		}
		callback(null, data);
		return this;
	};

	

	TweetClock.prototype.ParseTweets = function(params, callback){
		if (typeof params === 'function'){
			callback = params;
			params = {};
		}
		var tweetLowerParse;
		var data = [];
		for(i = 0; i < Object.keys(params).length; i++){
				try{
					if (i === 0){
						data.push({
							Hright: tweetR = params[i][0].text.slice(0, params[i][1][0]),
							Hcenter: center = params[i][0].text.slice(params[i][1][0], params[i][1][0] + params[i][1][1].length),
							Hleft: tweetL = params[i][0].text.slice(params[i][1][0] + params[i].length)
						});
					} else if( i === 1){
						data.push({
							Mright: tweetR = params[i][0].text.slice(0, params[i][1][0]),
							Mcenter: center = params[i][0].text.slice(params[i][1][0], params[i][1][0] + params[i][1][1].length),
							Mleft: tweetL = params[i][0].text.slice(params[i][1][0] + params[i][1][1].length)
						});
					} else if (i === 2){
						data.push({
							M2right: tweetR = params[i][0].text.slice(0, params[i][1][0]),
							M2center: center = params[i][0].text.slice(params[i][1][0], params[i][1][0] + params[i][1][1].length),
							M2left: tweetL = params[i][0].text.slice(params[i][1][0] + params[i][1][1].length)
						});
					}					
				}catch (exception) {
					console.log(exception);
					return;
				}
			} 
		callback(null, data);
		return this;
	};

	TweetClock.prototype.findTime = function(params, callback){

		this.findTimeText(params, function(err, res){
			tweet.ParseTweets(res, callback);
		});
	};


	TweetClock.prototype.getTweets = function(){
		var strings = timeStrings.slice(0);
		var str = strings.splice(0,1)[0];
		var tries = 0;

		(function oneTweet(){
			try {

				// var stream = client.stream('statuses/filter', {track: str, language: 'en'});

				// 	stream.on('tweet', function(data){
				// 		if (data.text !== undefined){
				// 			tweetLower = data.text.toLowerCase();
				// 			wordPos = tweetLower.search(str);
				// 			if (wordPos !== -1){
				// 				tweetStorage.push(data);
				// 				console.log(data.text);
				// 				if(str.length === 0){
				// 					console.log("finished getting tweets");
				// 					stream.stop();
				// 					this.updateTweets();
				// 				} else {
				// 					str = strings.splice(0,1)[0];
				// 					oneTweet();
				// 				}
				// 			}
				// 		}

				client.get('search/tweets', {q: str, count: '1', lang: 'en'}, function(err, data, response){
					console.log("Went to get a tweet", str);
					if(err){
						console.log(err);
						if (err.statusCode === 429){ //error 429 is a timeout from too many requests
							setTimeout(function(){
								oneTweet();
							}, 900000);
						}
					}
					if (data.statuses[0]){
						tweetLower = data.statuses[0].text.toLowerCase();
						wordPos = tweetLower.search(str);
						if (wordPos !== -1){
							// console.log(data.statuses[0].text, str);
							tweetStorage.push([data.statuses[0], [wordPos, str]]);
							if(strings.length === 0){
								console.log("Finished getting tweets");
								tweet.updateTweets();
							} else {
								str = strings.splice(0,1)[0];
								oneTweet();
							}
						}
						if (wordPos === -1){
							console.log(tries);
							// console.log(data.statuses[0], data.statuses[0].text, str);
							tries++;
							if(tries === 3){
								console.log("Shite be broken");
								console.log(data.statuses[0].text);
								setTimeout(function(){
									tries = 0;
									oneTweet();
							    }, 15000);
							}
							if(tries < 3){
								console.log("running");
								oneTweet();
							}
						}
					} else {
						console.log(data.statuses[0]);
						console.log("not getting tweets anymore");
						return;
					}
				});

			} catch (exception){
				console.log(exception);
				return;
			}
		})();
	};

	TweetClock.prototype.updateTweets = function(){
		var strings = timeStrings.slice(0);
		var str = strings.splice(0,1)[0];
		var i = 0;

		(function updateTweet(){
			try {
				var stream = client.stream('statuses/filter', {track: str, language: 'en'});

				stream.on('tweet', function(data){
					if (data.text !== undefined){
						tweetLower = data.text.toLowerCase();
						wordPos = tweetLower.search(str);
						if(wordPos !== -1){
							// console.log(tweetStorage);
							console.log(str);
							tweetStorage[i].splice(0, 2, data, [wordPos, str]);
							i++;
							if(strings.length === 0){
								console.log("Finsihed updating tweets");
								tweet.updateTweets();
							} else {
								str = strings.splice(0,1)[0];
								updateTweet();
							}
						}
					}
				});

			} catch (exception){
				console.log(exception);
				return;
			}
		})();


	};
}

module.exports = TweetClock;