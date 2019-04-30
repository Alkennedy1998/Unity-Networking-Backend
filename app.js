var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

//Possibly remove later
const fs = require("fs");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var playerManager = require('./routes/gameManager')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var jsonParser = bodyParser.json()


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gameManager', playerManager);



app.post('/test',jsonParser, function(req, res, next) {
 
    console.log(req.body.testGreeting); 
    res.send("Success");
    //res.send('respond with a resource');
  });




module.exports = app;
