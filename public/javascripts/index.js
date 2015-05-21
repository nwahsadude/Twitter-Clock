window.onload = function(){
	var prevTime;
	var socket = io();
	socket.on('connect', function(){
		setInterval(function(){
			var getTime = new Date();
				hours = getTime.getHours();
				minutes = getTime.getMinutes();
				time = [hours, minutes];
				if (minutes === prevTime){
					prevTime = minutes;
				} else if (prevTime === undefined || minutes !== prevTime){
					prevTime = minutes;
					socket.emit('message', time);
				}
		}, 1000);
	});

	socket.on('pageview', function(message){
		console.log(message);
		$('#hour_left').text(message.data[0].Hleft);
		$('#hour_center').text(message.data[0].Hcenter);
		$('#hour_right').text(message.data[0].Hright);

		$('#minute_left').text(message.data[1].Mleft);
		$('#minute_center').text(message.data[1].Mcenter);
		$('#minute_right').text(message.data[1].Mright);
		if(message.data[2]){
			$('#third').show();
			$('#third1').show();
			$('#minute2_left').text(message.data[2].M2left);
			$('#minute2_center').text(message.data[2].M2center);
			$('#minute2_right').text(message.data[2].M2right);
		} else {
			$('#third').hide();
			$('#third1').hide();
			$('#minute2_left').text("");
			$('#minute2_center').text("");
			$('#minute2_right').text("");			
		}
	});

};