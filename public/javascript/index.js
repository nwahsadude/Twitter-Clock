/**
 * Created by shawnzimmerman on 5/21/15.
 */
//var socket = io();

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

    $( "#hour" ).click(function() {
        socket.emit('message', time);
    });

    socket.on('pageview', function(message){
        $('#hour').animate({left: '100%'}, function(){
            $('#hour_left').text(message.data[0].Hleft);
            $('#hour_center').text(message.data[0].Hcenter);
            $('#hour_right').text(message.data[0].Hright);
            $('#hour').css( "left", "-100%" );
            $('#hour').animate({left: '25%'});
        });



        $('#minute1').animate({left: '100%'}, function(){
            $('#minute_left').text(message.data[1].Mleft);
            $('#minute_center').text(message.data[1].Mcenter);
            $('#minute_right').text(message.data[1].Mright);
            $('#minute1').css("left", "-100%");
            $('#minute1').animate({left: "25%"});
        });

        if(message.data[2]){
            $('#third').show();
            $('#third1').show();
            $('#third').animate({left: '100%'}, function() {
                $('#minute2_left').text(message.data[2].M2left);
                $('#minute2_center').text(message.data[2].M2center);
                $('#minute2_right').text(message.data[2].M2right);
                $('#third').css("left", "-100%");
                $('#third').animate({left: "25%"});
            });

        } else {
            $('#third').hide();
            $('#third1').hide();
            $('#minute2_left').text("");
            $('#minute2_center').text("");
            $('#minute2_right').text("");
        }
    });

};