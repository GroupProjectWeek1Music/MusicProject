var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var ejs = require ('ejs')
const cors = require('cors')
const axios = require('axios');

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/musicalyrics-development');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connect with mongoose")
});
//mongoose======end======>

//routes require
const loginRouter = require('./routes/login')
const homeRouter = require('./routes/home')
const musicRouter = require('./routes/music')
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/login', loginRouter)
app.use('/home', homeRouter)
app.use('/music', musicRouter)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

//axios.get('https://accounts.spotify.com/authorize?//client_id=2609ecdafcee47c8a6176bb83e88a507&//redirect_uri=http://localhost:8080/%2Fcallback&response_type=token&state=123')
//  .then(function (response) {
//    // handle success
//    console.log(response);
//  })
//  .catch(function (error) {
//    // handle error
//    console.log(error);
//  })

