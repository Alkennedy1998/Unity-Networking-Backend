var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

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



router.get('/refresh', bodyParser.json(), function(req, res, next) {
    res.send(activeGame)

});

router.post('/addPlayer', bodyParser.json(), function(req, res, next) {
    console.log(req.body.playerID);
    console.log(req.body.gameID);
    if(activeGame.player1 == "EMPTY"){
        activeGame.player1 = req.body.playerID;
        console.log("Player 1 set")
    }
    else{
        activeGame.player2 = req.body.playerID
    }
    res.send("Success")
});

router.post('/update', bodyParser.json(), function(req, res, next) {
    console.log(req.body.playerID);
    console.log(req.body.Xposition);
    console.log(req.body.Yposition);
    console.log(req.body.Zposition);

    if(req.body.playerID == activeGame.player1){
        activeGame.player1Position.x = req.body.Xposition;
        activeGame.player1Position.y = req.body.Yposition;
        activeGame.player1Position.z = req.body.Zposition;
    }
    else{
        activeGame.player2Position.x = req.body.Xposition;
        activeGame.player2Position.y = req.body.Yposition;
        activeGame.player2Position.z = req.body.Zposition;
    }
    res.send("Success")
});




module.exports = router;
