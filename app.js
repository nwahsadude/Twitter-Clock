var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var TweetClock = require('./Clock3');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
tweet = new TweetClock();
tweet.getTweets();
var clients;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


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
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    clients++;
    console.log(clients);
    socket.on('message', function(message){
        // console.log(message);
        tweet.findTime(message, function(err, data){
         if(err){
             console.log(err);
             return;
         }
         socket.emit('pageview', {data: data});
        });
    });
    console.log("a client connected");
});

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

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

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  debug('Listening on port ' + server.address().port);
}

module.exports = app;
