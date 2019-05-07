var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/*
var activeGame ={
    "player1":"EMPTY",
    "player2":"EMPTY",
    "gameNumber":"EMPTY",
    "player1Position":{
        "x":0,
        "y":0,
        "z":0
    },
    "player2Position":{
        "x":0,
        "y":0,
        "z":0
    }
}
*/
var activeGame ={
    player1:"EMPTY",
    player2:"EMPTY",

    player1xPos:2.675,
    player1yPos:1.897,
    player1zPos:3.9567,
    player1xRot:10,
    player1yRot:20,
    player1zRot:30,

    player2xPos:2.4325,
    player2yPos:1.2323,
    player2zPos:3.3423,
    player2xRot:40,
    player2yRot:50,
    player2zRot:60,
}



router.get('/refresh', bodyParser.json(), function(req, res, next) {

    res.send(activeGame);

});

router.get('/addPlayer', bodyParser.json(), function(req, res, next) {
    if(activeGame.player1 == "EMPTY"){

        activeGame.player1 = 1;
        res.send("1");
        console.log("Player 1 set");

    }
    else{

        activeGame.player2 = 2;
        res.send("2");
        console.log("Player 2 set");

    }
});

router.post('/update', bodyParser.json(), function(req, res, next) {
    console.log(req.body.playerID);

    if(req.body.playerID == activeGame.player1){
        activeGame.player1xPos = req.body.xPos;
        activeGame.player1yPos = req.body.yPos;
        activeGame.player1zPos = req.body.zPos;
        activeGame.player1xRot = req.body.xRot;
        activeGame.player1yRot = req.body.yRot;
        activeGame.player1zRot = req.body.zRot;

    }
    else{
        activeGame.player2xPos = req.body.xPos;
        activeGame.player2yPos = req.body.yPos;
        activeGame.player2zPos = req.body.zPos;
        activeGame.player2xRot = req.body.xRot;
        activeGame.player2yRot = req.body.yRot;
        activeGame.player2zRot = req.body.zRot;
    }
    res.send("Success")
});




module.exports = router;
