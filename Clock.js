var client,
	data = [],
	tweetStorage = [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	],
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
		"o'clock"
	];

var Twit = require('twit');
function TweetClock() {

	client = new Twit({
		consumer_key: 'Nz3PRnOPqypYGEa66VPp1fbi6',
		consumer_secret: 'doSxIgVQQ7kznCctfPU21c3xdvsi5bw4azwzfogoI1I83zo2qg',
		access_token: '13639462-QVfwSnGZLnFzX4VWM2W4UL4TJ6xrDh5QoDOyKp678',
		access_token_secret: 'BCx95FtUcTUsPEyr1ytL370r1RA2Xe1vIrjYWgeiSveFb'
	});



	TweetClock.prototype.findTimeText = function(params) {
		var data = [],
			random;

		switch (params[0]) {
			case 0: // 12 AM
				random = Math.floor(Math.random() * tweetStorage[11].length);
				data.push(tweetStorage[11][random]);
				break;
			case 1:
				random =Math.floor(Math.random() * tweetStorage[0].length);
				data.push(tweetStorage[0][random]);
				break;
			case 2:
				random =Math.floor(Math.random() * tweetStorage[1].length);
				data.push(tweetStorage[1][random]);
				break;
			case 3:
				random =Math.floor(Math.random() * tweetStorage[2].length);
				data.push(tweetStorage[2][random]);
				break;
			case 4:
				random =Math.floor(Math.random() * tweetStorage[3].length);
				data.push(tweetStorage[3][random]);
				break;
			case 5:
				random =Math.floor(Math.random() * tweetStorage[4].length);
				data.push(tweetStorage[4][random]);
				break;
			case 6:
				random =Math.floor(Math.random() * tweetStorage[5].length);
				data.push(tweetStorage[5][random]);
				break;
			case 7:
				random =Math.floor(Math.random() * tweetStorage[6].length);
				data.push(tweetStorage[6][random]);
				break;
			case 8:
				random =Math.floor(Math.random() * tweetStorage[7].length);
				data.push(tweetStorage[7][random]);
				break;
			case 9:
				random =Math.floor(Math.random() * tweetStorage[8].length);
				data.push(tweetStorage[8][random]);
				break;
			case 10:
				random =Math.floor(Math.random() * tweetStorage[9].length);
				data.push(tweetStorage[9][random]);
				break;
			case 11:
				random = Math.floor(Math.random() * tweetStorage[10].length);
				data.push(tweetStorage[10][random]);
				break;
			case 12: // 12 PM
				random = Math.floor(Math.random() * tweetStorage[11].length);
				data.push(tweetStorage[11][random]);
				break;
			case 13: // 1 PM
				random =Math.floor(Math.random() * tweetStorage[0].length);
				data.push(tweetStorage[0][random]);
				break;
			case 14:
				random =Math.floor(Math.random() * tweetStorage[1].length);
				data.push(tweetStorage[1][random]);
				break;
			case 15:
				random =Math.floor(Math.random() * tweetStorage[2].length);
				data.push(tweetStorage[2][random]);
				break;
			case 16:
				random =Math.floor(Math.random() * tweetStorage[3].length);
				data.push(tweetStorage[3][random]);
				break;
			case 17:
				random =Math.floor(Math.random() * tweetStorage[4].length);
				data.push(tweetStorage[4][random]);
				break;
			case 18:
				random =Math.floor(Math.random() * tweetStorage[5].length);
				data.push(tweetStorage[5][random]);
				break;
			case 19:
				random =Math.floor(Math.random() * tweetStorage[6].length);
				data.push(tweetStorage[6][random]);
				break;
			case 20:
				random =Math.floor(Math.random() * tweetStorage[7].length);
				data.push(tweetStorage[7][random]);
				break;
			case 21:
				random =Math.floor(Math.random() * tweetStorage[8].length);
				data.push(tweetStorage[8][random]);
				break;
			case 22:
				random =Math.floor(Math.random() * tweetStorage[9].length);
				data.push(tweetStorage[9][random]);
				break;
			case 23:
				random = Math.floor(Math.random() * tweetStorage[10].length);
				data.push(tweetStorage[10][random]);
				break;
			default:
				console.log("Didn't receive expected data", params[0]);
				break;
		}

		switch (params[1]) {
			case 0:
				random = Math.floor(Math.random() * tweetStorage[24].length);
				data.push(tweetStorage[24][random]);
				break;
			case 1:
				random = Math.floor(Math.random() * tweetStorage[0].length);
				data.push(tweetStorage[0][random]);
				break;
			case 2:
				random = Math.floor(Math.random() * tweetStorage[1].length);
				data.push(tweetStorage[1][random]);
				break;
			case 3:
				random = Math.floor(Math.random() * tweetStorage[2].length);
				data.push(tweetStorage[2][random]);
				break;
			case 4:
				random = Math.floor(Math.random() * tweetStorage[3].length);
				data.push(tweetStorage[3][random]);
				break;
			case 5:
				random = Math.floor(Math.random() * tweetStorage[4].length);
				data.push(tweetStorage[4][random]);
				break;
			case 6:
				random = Math.floor(Math.random() * tweetStorage[5].length);
				data.push(tweetStorage[5][random]);
				break;
			case 7:
				random = Math.floor(Math.random() * tweetStorage[6].length);
				data.push(tweetStorage[6][random]);
				break;
			case 8:
				random = Math.floor(Math.random() * tweetStorage[7].length);
				data.push(tweetStorage[7][random]);
				break;
			case 9:
				random = Math.floor(Math.random() * tweetStorage[8].length);
				data.push(tweetStorage[8][random]);
				break;
			case 10:
				random = Math.floor(Math.random() * tweetStorage[9].length);
				data.push(tweetStorage[9][random]);
				break;
			case 11:
				random = Math.floor(Math.random() * tweetStorage[10].length);
				data.push(tweetStorage[10][random]);
				break;
			case 12:
				random = Math.floor(Math.random() * tweetStorage[11].length);
				data.push(tweetStorage[11][random]);
				break;
			case 13:
				random = Math.floor(Math.random() * tweetStorage[12].length);
				data.push(tweetStorage[12][random]);
				break;
			case 14:
				random = Math.floor(Math.random() * tweetStorage[13].length);
				data.push(tweetStorage[13][random]);
				break;
			case 15:
				random = Math.floor(Math.random() * tweetStorage[14].length);
				data.push(tweetStorage[14][random]);
				break;
			case 16:
				random = Math.floor(Math.random() * tweetStorage[15].length);
				data.push(tweetStorage[15][random]);
				break;
			case 17:
				random = Math.floor(Math.random() * tweetStorage[16].length);
				data.push(tweetStorage[16][random]);
				break;
			case 18:
				random = Math.floor(Math.random() * tweetStorage[17].length);
				data.push(tweetStorage[17][random]);
				break;
			case 19:
				random = Math.floor(Math.random() * tweetStorage[18].length);
				data.push(tweetStorage[18][random]);
				break;
			case 20:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				break;
			case 21:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				random = Math.floor(Math.random() * tweetStorage[0].length);
				data.push(tweetStorage[0][random]);
				break;
			case 22:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				random = Math.floor(Math.random() * tweetStorage[1].length);
				data.push(tweetStorage[1][random]);
				break;
			case 23:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				random = Math.floor(Math.random() * tweetStorage[2].length);
				data.push(tweetStorage[2][random]);
				break;
			case 24:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				random = Math.floor(Math.random() * tweetStorage[3].length);
				data.push(tweetStorage[3][random]);
				break;
			case 25:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				random = Math.floor(Math.random() * tweetStorage[4].length);
				data.push(tweetStorage[4][random]);
				break;
			case 26:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				random = Math.floor(Math.random() * tweetStorage[5].length);
				data.push(tweetStorage[5][random]);
				break;
			case 27:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				random = Math.floor(Math.random() * tweetStorage[6].length);
				data.push(tweetStorage[6][random]);
				break;
			case 28:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				random = Math.floor(Math.random() * tweetStorage[7].length);
				data.push(tweetStorage[7][random]);
				break;
			case 29:
				random = Math.floor(Math.random() * tweetStorage[19].length);
				data.push(tweetStorage[19][random]);
				random = Math.floor(Math.random() * tweetStorage[8].length);
				data.push(tweetStorage[8][random]);
				break;
			case 30:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				break;
			case 31:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				random = Math.floor(Math.random() * tweetStorage[0].length);
				data.push(tweetStorage[0][random]);
				break;
			case 32:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				random = Math.floor(Math.random() * tweetStorage[1].length);
				data.push(tweetStorage[1][random]);
				break;
			case 33:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				random = Math.floor(Math.random() * tweetStorage[2].length);
				data.push(tweetStorage[2][random]);
				break;
			case 34:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				random = Math.floor(Math.random() * tweetStorage[3].length);
				data.push(tweetStorage[3][random]);
				break;
			case 35:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				random = Math.floor(Math.random() * tweetStorage[4].length);
				data.push(tweetStorage[4][random]);
				break;
			case 36:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				random = Math.floor(Math.random() * tweetStorage[5].length);
				data.push(tweetStorage[5][random]);
				break;
			case 37:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				random = Math.floor(Math.random() * tweetStorage[6].length);
				data.push(tweetStorage[6][random]);
				break;
			case 38:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				random = Math.floor(Math.random() * tweetStorage[7].length);
				data.push(tweetStorage[7][random]);
				break;
			case 39:
				random = Math.floor(Math.random() * tweetStorage[20].length);
				data.push(tweetStorage[20][random]);
				random = Math.floor(Math.random() * tweetStorage[8].length);
				data.push(tweetStorage[8][random]);
				break;
			case 40:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				break;
			case 41:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				random = Math.floor(Math.random() * tweetStorage[0].length);
				data.push(tweetStorage[0][random]);
				break;
			case 42:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				random = Math.floor(Math.random() * tweetStorage[1].length);
				data.push(tweetStorage[1][random]);
				break;
			case 43:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				random = Math.floor(Math.random() * tweetStorage[2].length);
				data.push(tweetStorage[2][random]);
				break;
			case 44:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				random = Math.floor(Math.random() * tweetStorage[3].length);
				data.push(tweetStorage[3][random]);
				break;
			case 45:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				random = Math.floor(Math.random() * tweetStorage[4].length);
				data.push(tweetStorage[4][random]);
				break;
			case 46:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				random = Math.floor(Math.random() * tweetStorage[5].length);
				data.push(tweetStorage[5][random]);
				break;
			case 47:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				random = Math.floor(Math.random() * tweetStorage[6].length);
				data.push(tweetStorage[6][random]);
				break;
			case 48:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				random = Math.floor(Math.random() * tweetStorage[7].length);
				data.push(tweetStorage[7][random]);
				break;
			case 49:
				random = Math.floor(Math.random() * tweetStorage[21].length);
				data.push(tweetStorage[21][random]);
				random = Math.floor(Math.random() * tweetStorage[8].length);
				data.push(tweetStorage[8][random]);
				break;
			case 50:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				break;
			case 51:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				random = Math.floor(Math.random() * tweetStorage[0].length);
				data.push(tweetStorage[0][random]);
				break;
			case 52:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				random = Math.floor(Math.random() * tweetStorage[1].length);
				data.push(tweetStorage[1][random]);
				break;
			case 53:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				random = Math.floor(Math.random() * tweetStorage[2].length);
				data.push(tweetStorage[2][random]);
				break;
			case 54:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				random = Math.floor(Math.random() * tweetStorage[3].length);
				data.push(tweetStorage[3][random]);
				break;
			case 55:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				random = Math.floor(Math.random() * tweetStorage[4].length);
				data.push(tweetStorage[4][random]);
				break;
			case 56:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				random = Math.floor(Math.random() * tweetStorage[5].length);
				data.push(tweetStorage[5][random]);
				break;
			case 57:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				random = Math.floor(Math.random() * tweetStorage[6].length);
				data.push(tweetStorage[6][random]);
				break;
			case 58:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				random = Math.floor(Math.random() * tweetStorage[7].length);
				data.push(tweetStorage[7][random]);
				break;
			case 59:
				random = Math.floor(Math.random() * tweetStorage[22].length);
				data.push(tweetStorage[22][random]);
				random = Math.floor(Math.random() * tweetStorage[8].length);
				data.push(tweetStorage[8][random]);
				break;
			//case 59:
			//	data.push(tweetStorage[23]);
			//	break;
			default:
				console.log("Didn't receive expected data", params[1]);
				break;
		}
		return data;
	};



	TweetClock.prototype.ParseTweets = function(params) {
		var data = [];
		for (var i = 0; i < Object.keys(params).length; i++) {
			try {

				if (i === 0) {
					//split the tweet text into three strings to be rendered clientside
					data.push({
						Hright: tweetR = params[i][0].text.slice(0, params[i][1]),
						Hcenter: center = params[i][0].text.slice(params[i][1], params[i][1] + params[i][2].length),
						Hleft: tweetL = params[i][0].text.slice(params[i][1] + params[i][2].length)
					});
				} else if (i === 1) {
					data.push({
						Mright: tweetR = params[i][0].text.slice(0, params[i][1]),
						Mcenter: center = params[i][0].text.slice(params[i][1], params[i][1] + params[i][2].length),
						Mleft: tweetL = params[i][0].text.slice(params[i][1] + params[i][2].length)
					});
				} else if (i === 2) {
					data.push({
						M2right: tweetR = params[i][0].text.slice(0, params[i][1]),
						M2center: center = params[i][0].text.slice(params[i][1], params[i][1] + params[i][2].length),
						M2left: tweetL = params[i][0].text.slice(params[i][1] + params[i][2].length)
					});
				}
			} catch (exception) {
				console.log(exception);
				return;
			}
		}
		return data;
	};

	TweetClock.prototype.findTime = function(params) {

		var res = this.findTimeText(params);
		res = this.ParseTweets(res);
		return res;
	};


	TweetClock.prototype.getTweets = function() {
		var strings = timeStrings.slice(0);
		var str = strings.splice(0, 1)[0];
		var i = 0;

		(function oneTweet() {
			try {
				client.get('search/tweets', {
					q: str,
					count: '1',
					lang: 'en'
				}, function(err, data, response) {
					console.log("Went to get a tweet", str);
					if (err) {
						console.log(err);
						if (err.code === 88) { //error 88 is a timeout from too many requests
							setTimeout(function() {
								oneTweet();
							}, 90000);
							return;
						}
					}

					if (data.statuses[0]) {
						var tweetLower = data.statuses[0].text.toLowerCase();
						var wordPos = tweetLower.search(str);
						// if the word is found in the tweet text

						if (wordPos !== -1) {
							tweetStorage[i].push([data.statuses[0], wordPos, str]);
							//tweetStorage.push([data.statuses[0], wordPos, str]);
							if (strings.length === 0) {
								console.log("Finished getting tweets");
								i = 0;
								tweet.updateTweets();
							} else {
								i++;
								str = strings.splice(0, 1)[0];
								oneTweet();
							}
						}
						// if the word isn't found in the tweet text
						if (wordPos === -1) {
							setTimeout(function() {
								console.log(data.statuses[0].text);
								console.log("Tweet didn't have the word");
								oneTweet();
							}, 5000);
						}
					} else { // catch it when it fails randomly. Figure out why it does this.
						setTimeout(function() {
							console.log(data, data.statuses);
							console.log("not getting tweets anymore");
							oneTweet();
						}, 5000);
					}
				});

			} catch (exception) {
				console.log(exception);
				return;
			}
		})();
	};

	TweetClock.prototype.updateTweets = function() {
		var stream = client.stream('statuses/filter', {
			track: timeStrings,
			language: 'en'
		});

		var tweetLower,
			wordPos;

		stream.on('tweet', function(data) {
			tweetLower = data.text.toLowerCase();
			for (var i = 0; i < timeStrings.length; i++) {
				wordPos = tweetLower.search(timeStrings[i]);
				if (wordPos !== -1) {
					if (tweetStorage[i].length < 10){
						tweetStorage[i].push([data, wordPos, timeStrings[i]]);
					} else {
						tweetStorage[i][0].splice(0, 3);
						tweetStorage[i].push([data, wordPos, timeStrings[i]]);
					}
				}
			}
		});
	};
}

module.exports = TweetClock;