var createError = require('http-errors');
var express = require('express');  // import express module from 
//express package it provides express arrow function  
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// webpage routes
var submition = require("./Routes/Todorouter")
var display = require("./Routes/Todorouter")
var updation = require("./Routes/Todorouter")
var deletion = require("./Routes/Todorouter")


var app = express();        // express arrow function return express app object / instance

// view engine setup
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/List", submition);    /// middleware function acess to req and res cycle
app.use("/List", display);    /// middleware function acess to req and res cycle
app.use("/List", updation);    /// middleware function acess to req and res cycle
app.use("/List", deletion);    /// middleware function acess to req and res cycle





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development   
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
