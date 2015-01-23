window.onload = function(){
	var socket = io.connect('http://localhost:3000');

	socket.on('connect', function(){
		setInterval(function(){
			var time = new Date();
				hours = time.getHours();
				minutes = time.getMinutes();
				time = [hours, minutes];
			socket.send(time);
		}, 60 * 500);
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
			$('#minute2_left').text(message.data[2].M2left);
			$('#minute2_center').text(message.data[2].M2center);
			$('#minute2_right').text(message.data[2].M2right);
		}
		return;
	});
};