var createError = require('http-errors');
var express = require('express');  // import express module from 
//express package it provides express arrow function  
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var path = require("path")
// webpage routes
var SignIn = require("./Routes/Signrouter");
var LoginIn = require("./Routes/Loginrouter");
var submition = require("./Routes/Todorouter")
var display = require("./Routes/Todorouter")
var updation = require("./Routes/Todorouter")
var deletion = require("./Routes/Todorouter");
//================================================================================
var AdsignIn = require("./Routes/Adsignroute");
var Adlogin = require("./Routes/Adloginroute");
var pizzasubmit = require("./Routes/Pizzaroutes");
var burgersubmit = require("./Routes/Burgerroute");
var wrapsubmit = require("./Routes/Wraproute");
var pizzadisplay = require("./Routes/Pizzaroutes");
var burgerdisplay = require("./Routes/Burgerroute");
var wrapdisplay = require("./Routes/Wraproute");
var pizzaupdate = require("./Routes/Pizzaroutes");
var burgerupdate = require("./Routes/Burgerroute");
var wrapupdate = require("./Routes/Wraproute");
var pizzadelete = require("./Routes/Pizzaroutes");
var burgerdelete = require("./Routes/Burgerroute");
var wrapdelete = require("./Routes/Wraproute");

var app = express();        // express arrow function return express app object / instance

// view engine setup
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'Public')));
app.use("/List", submition);    /// middleware function acess to req and res cycle
app.use("/List", display);    /// middleware function acess to req and res cycle
app.use("/List", updation);    /// middleware function acess to req and res cycle
app.use("/List", deletion);    /// middleware function acess to req and res cycle
app.use("/SignInPage", SignIn);
app.use("/LoginPage", LoginIn);
//<=====================================================================>

app.use("/AdminSignIn", AdsignIn);
app.use("/AdminLogin", Adlogin);
app.use("/PizzaSubmit", pizzasubmit);
app.use("/BurgerSubmit", burgersubmit);
app.use("/WrapSubmit", wrapsubmit);
app.use("/PizzaDisplay", pizzadisplay);
app.use("/BurgerDisplay", burgerdisplay);
app.use("/WrapDisplay", wrapdisplay);
app.use("/PizzaUpdate", pizzaupdate);
app.use("/BurgerUpdate", burgerupdate);
app.use("/WrapUpdate", wrapupdate);
app.use("/PizzaDelete", pizzadelete);
app.use("/BurgerDelete", burgerdelete);
app.use("/WrapDelete", wrapdelete);




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
