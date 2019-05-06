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
 
    console.log(req.body);
    console.log(req.body.timeElapsed+2); 
    res.send("Success");
    //res.send('respond with a resource');
  });

  var counter = 0;
  app.get('/data', function(req, res, next) {
    counter+=1;
    console.log("responded to /data with resource");
    var testObj = {
        cat: '22',
        fish: 3,
        john: "ayy"
    }
    testObj.fish = counter;
    res.send(testObj);
  });


module.exports = app;
