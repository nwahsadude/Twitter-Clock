var Twit = require('twit');

var TweetClock = function () {
    var client;
    this.stream;
    this.tweetStorage = [
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
    ];
    var timeStrings = [
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
    this.tweetsCollected = 0;

    client = new Twit({
        consumer_key: 'Nz3PRnOPqypYGEa66VPp1fbi6',
        consumer_secret: 'doSxIgVQQ7kznCctfPU21c3xdvsi5bw4azwzfogoI1I83zo2qg',
        access_token: '13639462-QVfwSnGZLnFzX4VWM2W4UL4TJ6xrDh5QoDOyKp678',
        access_token_secret: 'BCx95FtUcTUsPEyr1ytL370r1RA2Xe1vIrjYWgeiSveFb'
    });




    this.findTimeText = function (params) {
        var data = [],
            self = this,
			tweet;

        for (var i = 0; i < this.tweetStorage.length; i++){
            if (this.tweetStorage[i] === undefined){
                console.log(this.tweetStorage[i]);
            }
        }

        function getTweetOut(number){
			if (self.tweetStorage[number]){
                return self.tweetStorage[number][Math.floor(Math.random() * self.tweetStorage[number].length)];
			} else {
				console.log(self.tweetStorage);
			}
        }

        switch (params[0]) {
            case 0: // 12 AM
				//tweet = getTweetOut(11);
                data.push(tweet = getTweetOut(11));
                break;
            case 1:
                data.push(tweet = getTweetOut(0));
                break;
            case 2:
                data.push(tweet = getTweetOut(1));
                break;
            case 3:
                data.push(tweet = getTweetOut(2));
                break;
            case 4:
                data.push(tweet = getTweetOut(3));
                break;
            case 5:
                data.push(tweet = getTweetOut(4));
                break;
            case 6:
                data.push(tweet = getTweetOut(5));
                break;
            case 7:
                data.push(tweet = getTweetOut(6));
                break;
            case 8:
                data.push(tweet = getTweetOut(7));
                break;
            case 9:
                data.push(tweet = getTweetOut(8));
                break;
            case 10:
                data.push(tweet = getTweetOut(9));
                break;
            case 11:
                data.push(tweet = getTweetOut(10));
                break;
            case 12: // 12 PM
                data.push(tweet = getTweetOut(11));
                break;
            case 13: // 1 PM
                data.push(tweet = getTweetOut(0));
                break;
            case 14:
                data.push(tweet = getTweetOut(1));
                break;
            case 15:
                data.push(tweet = getTweetOut(2));
                break;
            case 16:
                data.push(tweet = getTweetOut(3));
                break;
            case 17:
                data.push(tweet = getTweetOut(4));
                break;
            case 18:
                data.push(tweet = getTweetOut(5));
                break;
            case 19:
                data.push(tweet = getTweetOut(6));
                break;
            case 20:
                data.push(tweet = getTweetOut(7));
                break;
            case 21:
                data.push(tweet = getTweetOut(8));
                break;
            case 22:
                data.push(tweet = getTweetOut(9));
                break;
            case 23:
                data.push(tweet = getTweetOut(10));
                break;
            default:
                console.log("Didn't receive expected data", params[0]);
                break;
        }

        switch (params[1]) {
			case 0:
				data.push(tweet = getTweetOut(24));
				break;
			case 1:
				data.push(tweet = getTweetOut(0));
				break;
			case 2:
				data.push(tweet = getTweetOut(1));
				break;
			case 3:
				data.push(tweet = getTweetOut(2));
				break;
			case 4:
				data.push(tweet = getTweetOut(3));
				break;
			case 5:
				data.push(tweet = getTweetOut(4));
				break;
			case 6:
				data.push(tweet = getTweetOut(5));
				break;
			case 7:
				data.push(tweet = getTweetOut(6));
				break;
			case 8:
				data.push(tweet = getTweetOut(7));
				break;
			case 9:
				data.push(tweet = getTweetOut(8));
				break;
			case 10:
				data.push(tweet = getTweetOut(9));
				break;
			case 11:
				data.push(tweet = getTweetOut(10));
				break;
			case 12:
				data.push(tweet = getTweetOut(11));
				break;
			case 13:
				data.push(tweet = getTweetOut(12));
				break;
			case 14:
				data.push(tweet = getTweetOut(13));
				break;
			case 15:
				data.push(tweet = getTweetOut(14));
				break;
			case 16:
				data.push(tweet = getTweetOut(15));
				break;
			case 17:
				data.push(tweet = getTweetOut(16));
				break;
			case 18:
				data.push(tweet = getTweetOut(17));
				break;
			case 19:
				data.push(tweet = getTweetOut(18));
				break;
			case 20:
				data.push(tweet = getTweetOut(19));
				break;
			case 21:
				data.push(tweet = getTweetOut(19));
				data.push(tweet = getTweetOut(0));
				break;
			case 22:
				data.push(tweet = getTweetOut(19));
				data.push(tweet = getTweetOut(1));
				break;
			case 23:
				data.push(tweet = getTweetOut(19));
				data.push(tweet = getTweetOut(2));
				break;
			case 24:
				data.push(tweet = getTweetOut(19));
				data.push(tweet = getTweetOut(3));
				break;
			case 25:
				data.push(tweet = getTweetOut(19));
				data.push(tweet = getTweetOut(4));
				break;
			case 26:
				data.push(tweet = getTweetOut(19));
				data.push(tweet = getTweetOut(5));
				break;
			case 27:
				data.push(tweet = getTweetOut(19));
				data.push(tweet = getTweetOut(6));
				break;
			case 28:
				data.push(tweet = getTweetOut(19));
				data.push(tweet = getTweetOut(7));
				break;
			case 29:
				data.push(tweet = getTweetOut(19));
				data.push(tweet = getTweetOut(8));
				break;
			case 30:
				data.push(tweet = getTweetOut(20));
				break;
			case 31:
				data.push(tweet = getTweetOut(20));
				data.push(tweet = getTweetOut(0));
				break;
			case 32:
				data.push(tweet = getTweetOut(20));
				data.push(tweet = getTweetOut(1));
				break;
			case 33:
				data.push(tweet = getTweetOut(20));
				data.push(tweet = getTweetOut(2));
				break;
			case 34:
				data.push(tweet = getTweetOut(20));
				data.push(tweet = getTweetOut(3));
				break;
			case 35:
				data.push(tweet = getTweetOut(20));
				data.push(tweet = getTweetOut(4));
				break;
			case 36:
				data.push(tweet = getTweetOut(20));
				data.push(tweet = getTweetOut(5));
				break;
			case 37:
				data.push(tweet = getTweetOut(20));
				data.push(tweet = getTweetOut(6));
				break;
			case 38:
				data.push(tweet = getTweetOut(20));
				data.push(tweet = getTweetOut(7));
				break;
			case 39:
				data.push(tweet = getTweetOut(20));
				data.push(tweet = getTweetOut(8));
				break;
			case 40:
				data.push(tweet = getTweetOut(21));
				break;
			case 41:
				data.push(tweet = getTweetOut(21));
				data.push(tweet = getTweetOut(0));
				break;
			case 42:
				data.push(tweet = getTweetOut(21));
				data.push(tweet = getTweetOut(1));
				break;
			case 43:
				data.push(tweet = getTweetOut(21));
				data.push(tweet = getTweetOut(2));
				break;
			case 44:
				data.push(tweet = getTweetOut(21));
				data.push(tweet = getTweetOut(3));
				break;
			case 45:
				data.push(tweet = getTweetOut(21));
				data.push(tweet = getTweetOut(4));
				break;
			case 46:
				data.push(tweet = getTweetOut(21));
				data.push(tweet = getTweetOut(5));
				break;
			case 47:
				data.push(tweet = getTweetOut(21));
				data.push(tweet = getTweetOut(6));
				break;
			case 48:
				data.push(tweet = getTweetOut(21));
				data.push(tweet = getTweetOut(7));
				break;
			case 49:
				data.push(tweet = getTweetOut(21));
				data.push(tweet = getTweetOut(8));
				break;
			case 50:
				data.push(tweet = getTweetOut(22));
				break;
			case 51:
				data.push(tweet = getTweetOut(22));
				data.push(tweet = getTweetOut(0));
				break;
			case 52:
				data.push(tweet = getTweetOut(22));
				data.push(tweet = getTweetOut(1));
				break;
			case 53:
				data.push(tweet = getTweetOut(22));
				data.push(tweet = getTweetOut(2));
				break;
			case 54:
				data.push(tweet = getTweetOut(22));
				data.push(tweet = getTweetOut(3));
				break;
			case 55:
				data.push(tweet = getTweetOut(22));
				data.push(tweet = getTweetOut(4));
				break;
			case 56:
				data.push(tweet = getTweetOut(22));
				data.push(tweet = getTweetOut(5));
				break;
			case 57:
				data.push(tweet = getTweetOut(22));
				data.push(tweet = getTweetOut(6));
				break;
			case 58:
				data.push(tweet = getTweetOut(22));
				data.push(tweet = getTweetOut(7));
				break;
			case 59:
				data.push(tweet = getTweetOut(22));
				data.push(tweet = getTweetOut(8));
				break;
			default:
				console.log("Didn't receive expected data", params[1]);
				break;
		}
        return data;
    },

    this.ParseTweets = function (params) {
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
    },

    this.findTime = function (params) {

        var res = this.findTimeText(params);
        res = this.ParseTweets(res);

        return res;
    },

    this.getTweets = function () {
        var strings = timeStrings.slice(0);
        var str = strings.splice(0, 1)[0];
        var i = 0;
        var thing = this;

        (function oneTweet() {
            try {
                client.get('search/tweets', {
                    q: str,
                    count: '1',
                    lang: 'en'
                }, function (err, data) {
                    console.log("Went to get a tweet", str);
                    if (err) {
                        console.log(err);
                        if (err.code === 88) { //error 88 is a timeout from too many requests
                            setTimeout(function () {
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
                            thing.tweetStorage[i].push([data.statuses[0], wordPos, str]);
                            //tweetStorage.push([data.statuses[0], wordPos, str]);
                            if (strings.length === 0) {
                                console.log("Finished getting tweets");
                                i = 0;
                            } else {
                                i++;
                                str = strings.splice(0, 1)[0];
                                oneTweet();
                            }
                        }
                        // if the word isn't found in the tweet text
                        if (wordPos === -1) {
                            setTimeout(function () {
                                console.log(data.statuses[0].text);
                                console.log("Tweet didn't have the word");
                                oneTweet();
                            }, 5000);
                        }
                    } else { // catch it when it fails randomly. Figure out why it does this.
                        setTimeout(function () {
                            console.log(data, data.statuses);
                            console.log("not getting tweets anymore");
                            oneTweet();
                        }, 5000);
                    }
                });

            } catch (exception) {
                console.log(exception);
            }
        })();

    },

    this.updateTweets = function () {
		console.log("Stream started");
        this.stream = client.stream('statuses/filter', {
            track: timeStrings,
            language: 'en'
        });

        var tweetLower,
            wordPos,
            thing = this;

        this.stream.on('tweet', function (data) {
            tweetLower = data.text.toLowerCase();
            for (var i = 0; i < timeStrings.length; i++) {
                wordPos = tweetLower.search(timeStrings[i]);
                if (wordPos !== -1) {
                    thing.tweetsCollected++;
                    if (thing.tweetStorage[i].length < 10) {
                        thing.tweetStorage[i].push([data, wordPos, timeStrings[i]]);
                    } else {
                        thing.tweetStorage[i].splice(0, 1);
                        thing.tweetStorage[i].push([data, wordPos, timeStrings[i]]);
                    }
                }
            }
        });
    };

	this.stopStream = function () {
		console.log("Stream stopped");
		this.stream.stop();
	};
};


exports.TweetClock = TweetClock;