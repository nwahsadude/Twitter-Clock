var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var TweetClock = require('./Clock');

var routes = require('./routes/index');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

tweet = new TweetClock();
tweet.getTweets();
var clients = 0;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var debug = require('debug')('Twitter_Clock:server');


var port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);


io.sockets.on('connection', function(socket){
    clients++;
    console.log(clients);
    console.log("A client connected");

    socket.on('message', function(data){
        tweet.findTime(data, function(rdata){
         //if(err){
         //    console.log(err);
         //    return;
         //}
            console.log(rdata);
         socket.emit('pageview', {data: rdata});
        });
    });

    socket.on('disconnect', function(){
        clients--;
        console.log(clients);
    });
});


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

//process.on('uncaughtException', function(err){
//    console.error(err.stack);
//    console.log("Node NOT Exiting");
//});


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error('Port ' + port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('Port ' + port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


function onListening() {
  debug('Listening on port ' + server.address().port);
}

module.exports = app;
