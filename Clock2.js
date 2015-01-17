var Twitter = require('twitter');

function TweetClock(){

	client = new Twitter({
		consumer_key: 'rQDSsPdpwKTxqch6QgGRXDEdz',
		consumer_secret: 'pRvMc6gE8lD6tHzJY6eC6E0Kk8bVWP8h5vf9XRukxFRE7OvjbW',
		access_token_key: '13639462-QVfwSnGZLnFzX4VWM2W4UL4TJ6xrDh5QoDOyKp678',
		access_token_secret: 'BCx95FtUcTUsPEyr1ytL370r1RA2Xe1vIrjYWgeiSveFb'
	});

	var	client,
		twitterSearchParams = [],
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




	TweetClock.prototype.findTimeText = function(params){
		// This is where it will be getting the strings of the time
		// params [hour, minutes]
		switch (params[0]) {
			case 0: // 12 AM
				twitterSearchParams.push(timeTextApi[11]);
				break;
			case 1:
				twitterSearchParams.push(timeTextApi[0]);
				break;
			case 2:
				twitterSearchParams.push(timeTextApi[1]);
				break;
			case 3:
				twitterSearchParams.push(timeTextApi[2]);
				break;
			case 4:
				twitterSearchParams.push(timeTextApi[3]);
				break;
			case 5:
				twitterSearchParams.push(timeTextApi[4]);
				break;
			case 6:
				twitterSearchParams.push(timeTextApi[5]);
				break;
			case 7:
				twitterSearchParams.push(timeTextApi[6]);
				break;
			case 8:
				twitterSearchParams.push(timeTextApi[7]);
				break;
			case 9:
				twitterSearchParams.push(timeTextApi[8]);
				break;
			case 10:
				twitterSearchParams.push(timeTextApi[9]);
				break;
			case 11:
				twitterSearchParams.push(timeTextApi[10]);
				break;
			case 12: // 12 PM
				twitterSearchParams.push(timeTextApi[11]);
				break;
			case 13: // 1 PM
				twitterSearchParams.push(timeTextApi[0]);
				break;
			case 14:
				twitterSearchParams.push(timeTextApi[1]);
				break;
			case 15:
				twitterSearchParams.push(timeTextApi[2]);
				break;
			case 16:
				twitterSearchParams.push(timeTextApi[3]);
				break;
			case 17:
				twitterSearchParams.push(timeTextApi[4]);
				break;
			case 18:
				twitterSearchParams.push(timeTextApi[5]);
				break;
			case 19:
				twitterSearchParams.push(timeTextApi[6]);
				break;
			case 20:
				twitterSearchParams.push(timeTextApi[7]);
				break;
			case 21:
				twitterSearchParams.push(timeTextApi[8]);
				break;
			case 22:
				twitterSearchParams.push(timeTextApi[9]);
				break;
			case 23:
				twitterSearchParams.push(timeTextApi[10]);
				break;
			default:
				console.log("Hour be broken yo.");
				break;
		}
		console.log(params[1]);
		switch (params[1]) {
			case 0: 
				twitterSearchParams.push(timeTextApi[24]);
				break;
			case 1: 
				twitterSearchParams.push(timeTextApi[0]);
				break;
			case 2: 
				twitterSearchParams.push(timeTextApi[1]);
				break;
			case 3: 
				twitterSearchParams.push(timeTextApi[2]);
				break;
			case 4: 
				twitterSearchParams.push(timeTextApi[3]);
				break;
			case 5: 
				twitterSearchParams.push(timeTextApi[4]);
				break;
			case 6: 
				twitterSearchParams.push(timeTextApi[5]);
				break;
			case 7: 
				twitterSearchParams.push(timeTextApi[6]);
				break;
			case 8: 
				twitterSearchParams.push(timeTextApi[7]);
				break;
			case 9: 
				twitterSearchParams.push(timeTextApi[8]);
				break;
			case 10: 
				twitterSearchParams.push(timeTextApi[9]);
				break;
			case 11: 
				twitterSearchParams.push(timeTextApi[10]);
				break;
			case 12: 
				twitterSearchParams.push(timeTextApi[11]);
				break;
			case 13: 
				twitterSearchParams.push(timeTextApi[12]);
				break;
			case 14: 
				twitterSearchParams.push(timeTextApi[13]);
				break;
			case 15: 
				twitterSearchParams.push(timeTextApi[14]);
				break;
			case 16: 
				twitterSearchParams.push(timeTextApi[15]);
				break;
			case 17: 
				twitterSearchParams.push(timeTextApi[16]);
				break;
			case 18: 
				twitterSearchParams.push(timeTextApi[17]);
				break;
			case 19: 
				twitterSearchParams.push(timeTextApi[18]);
				break;
			case 20: 
				twitterSearchParams.push(timeTextApi[19]);
				break;
			case 21: 
				twitterSearchParams.push(timeTextApi[19]);
				break;
			case 22: 
				twitterSearchParams.push(timeTextApi[19]);
				twitterSearchParams.push(timeTextApi[1]);
				break;
			case 23: 
				twitterSearchParams.push(timeTextApi[19]);
				twitterSearchParams.push(timeTextApi[2]);
				break;
			case 24: 
				twitterSearchParams.push(timeTextApi[19]);
				twitterSearchParams.push(timeTextApi[3]);
				break;
			case 25: 
				twitterSearchParams.push(timeTextApi[19]);
				twitterSearchParams.push(timeTextApi[4]);
				break;
			case 26: 
				twitterSearchParams.push(timeTextApi[19]);
				twitterSearchParams.push(timeTextApi[5]);
				break;
			case 27: 
				twitterSearchParams.push(timeTextApi[19]);
				twitterSearchParams.push(timeTextApi[6]);
				break;
			case 28: 
				twitterSearchParams.push(timeTextApi[19]);
				twitterSearchParams.push(timeTextApi[7]);
				break;
			case 29: 
				twitterSearchParams.push(timeTextApi[19]);
				twitterSearchParams.push(timeTextApi[8]);
				break;
			case 30: 
				twitterSearchParams.push(timeTextApi[19]);
				twitterSearchParams.push(timeTextApi[9]);
				break;
			case 31: 
				twitterSearchParams.push(timeTextApi[20]);
				break;
			case 32: 
				twitterSearchParams.push(timeTextApi[20]);
				twitterSearchParams.push(timeTextApi[1]);
				break;
			case 33: 
				twitterSearchParams.push(timeTextApi[20]);
				twitterSearchParams.push(timeTextApi[2]);
				break;
			case 34: 
				twitterSearchParams.push(timeTextApi[20]);
				twitterSearchParams.push(timeTextApi[3]);
				break;
			case 35: 
				twitterSearchParams.push(timeTextApi[20]);
				twitterSearchParams.push(timeTextApi[4]);
				break;
			case 36: 
				twitterSearchParams.push(timeTextApi[20]);
				twitterSearchParams.push(timeTextApi[5]);
				break;
			case 37: 
				twitterSearchParams.push(timeTextApi[20]);
				twitterSearchParams.push(timeTextApi[6]);
				break;
			case 38: 
				twitterSearchParams.push(timeTextApi[20]);
				twitterSearchParams.push(timeTextApi[7]);
				break;
			case 39: 
				twitterSearchParams.push(timeTextApi[20]);
				twitterSearchParams.push(timeTextApi[8]);
				break;
			case 40: 
				twitterSearchParams.push(timeTextApi[20]);
				twitterSearchParams.push(timeTextApi[9]);
				break;
			case 41: 
				twitterSearchParams.push(timeTextApi[21]);
				break;
			case 42: 
				twitterSearchParams.push(timeTextApi[21]);
				twitterSearchParams.push(timeTextApi[1]);
				break;
			case 43: 
				twitterSearchParams.push(timeTextApi[21]);
				twitterSearchParams.push(timeTextApi[2]);
				break;
			case 44: 
				twitterSearchParams.push(timeTextApi[21]);
				twitterSearchParams.push(timeTextApi[3]);
				break;
			case 45: 
				twitterSearchParams.push(timeTextApi[21]);
				twitterSearchParams.push(timeTextApi[4]);
				break;
			case 46: 
				twitterSearchParams.push(timeTextApi[21]);
				twitterSearchParams.push(timeTextApi[5]);
				break;
			case 47: 
				twitterSearchParams.push(timeTextApi[21]);
				twitterSearchParams.push(timeTextApi[6]);
				break;
			case 48: 
				twitterSearchParams.push(timeTextApi[21]);
				twitterSearchParams.push(timeTextApi[7]);
				break;
			case 49: 
				twitterSearchParams.push(timeTextApi[21]);
				twitterSearchParams.push(timeTextApi[8]);
				break;
			case 50: 
				twitterSearchParams.push(timeTextApi[21]);
				twitterSearchParams.push(timeTextApi[9]);
				break;
			case 51: 
				twitterSearchParams.push(timeTextApi[22]);
				break;
			case 52: 
				twitterSearchParams.push(timeTextApi[22]);
				twitterSearchParams.push(timeTextApi[1]);
				break;
			case 53: 
				twitterSearchParams.push(timeTextApi[22]);
				twitterSearchParams.push(timeTextApi[2]);
				break;
			case 54: 
				twitterSearchParams.push(timeTextApi[22]);
				twitterSearchParams.push(timeTextApi[3]);
				break;
			case 55: 
				twitterSearchParams.push(timeTextApi[22]);
				twitterSearchParams.push(timeTextApi[4]);
				break;
			case 56: 
				twitterSearchParams.push(timeTextApi[22]);
				twitterSearchParams.push(timeTextApi[5]);
				break;
			case 57: 
				twitterSearchParams.push(timeTextApi[22]);
				twitterSearchParams.push(timeTextApi[6]);
				break;
			case 58: 
				twitterSearchParams.push(timeTextApi[22]);
				twitterSearchParams.push(timeTextApi[7]);
				break;
			case 58: 
				twitterSearchParams.push(timeTextApi[22]);
				twitterSearchParams.push(timeTextApi[8]);
				break;
			case 59: 
				twitterSearchParams.push(timeTextApi[22]);
				twitterSearchParams.push(timeTextApi[8]);
				break;
			default:
				console.log("Minutes be broken!");
				break;
		}
	};

	TweetClock.prototype.getTweet = function(params, callback){
		//Get the tweet from twitter
		if (typeof params === 'function'){
			callback = params;
			params = {};
		}
		var tweets = [];
		var par = params.slice(0);
		var parms = par.splice(0,1)[0];
		var tries = 0;
		(function oneTweet(){
			try{
				client.get('search/tweets.json', {q: parms, count: "1"}, function(error, data) {
					if (error){
						console.log(error);
						return;
					}
					//This makes sure the tweet actually contains the need word
					//It was randomly giving junk tweets
					if (data){
						// console.log(data.statuses[0].text);
						tweetLower = data.statuses[0].text.toLowerCase();
						wordPos = tweetLower.search(parms);
						if (wordPos !== -1){
							tweets.push(data.statuses[0].text);
							if(par.length === 0){
								tweet.ParseTweets(tweets, callback);
							} else {
								parms = par.splice(0,1)[0];
								oneTweet();
							}
						} else {
							console.log("failed to get good tweet");
							console.log(data.statuses[0].text);
							tries++;

							if (tries === 3){
								err = "Unable to find a tweet of the time.";
								callback(err, null);
								return;
							}
							oneTweet();
						}
					}

				});
			} catch (exception){
				callback(exception, null);
			}
		})();
	};

	TweetClock.prototype.ParseTweets = function(params, callback){
		if (typeof params === 'function'){
			callback = params;
			params = {};
		}
		var tweetLowerParse;
		var data = [];
		for(i = 0; i < Object.keys(params).length; i++){
			console.log(params[i]);
			tweetLowerParse = params[i].toLowerCase();
			wordPos = tweetLowerParse.search(twitterSearchParams[i]);
			if (wordPos == -1) {
				console.log("text not found!");
				return;
			} else {
				try{
					if (i === 0){
						data.push({
							Hright: tweetR = params[i].slice(0, wordPos),
							Hcenter: center = params[i].slice(wordPos, wordPos + twitterSearchParams[i].length),
							Hleft: tweetL = params[i].slice(wordPos + twitterSearchParams[i].length)
						});
					} else if( i === 1){
						data.push({
							Mright: tweetR = params[i].slice(0, wordPos),
							Mcenter: center = params[i].slice(wordPos, wordPos + twitterSearchParams[i].length),
							Mleft: tweetL = params[i].slice(wordPos + twitterSearchParams[i].length)
						});
					} else if (i === 2){
						data.push({
							M2right: tweetR = params[i].slice(0, wordPos),
							M2center: center = params[i].slice(wordPos, wordPos + twitterSearchParams[i].length),
							M2left: tweetL = params[i].slice(wordPos + twitterSearchParams[i].length)
						});
					}					
				}catch (exception) {
					console.log(exception);
				}
			} 
		}
		callback(null, data);
		return this;
	};

	TweetClock.prototype.findTime = function(params, callback){
		// This is run on the client // Sends the server an array with the hour and minute.
		twitterSearchParams = [];
		this.findTimeText(params);

		this.getTweet(twitterSearchParams, callback);



	};

}
					// tweets.push(res);
					// this.ParseTweets(tweets, callback);

module.exports = TweetClock;