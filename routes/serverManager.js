var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

//Contains information about the game and all of the players
var serverData ={
    numOfPlayers : 0,
    currentUniqueID : 1,
    playerData : {}
}

//Send the new gameData from each player in the game
router.get('/refresh', bodyParser.json(), function(req, res, next) {

    res.send(serverData);

});

//When the start multiplayer button is pressed, request to join game and recieve a unique playerID
router.get('/joinGame',bodyParser.json(),function(req,res,next)
{
    
    var playerDataTemplate ={
        xPosition:2.675,
        yPosition:1.897,
        zPosition:3.9567,
        xRotation:10,
        yRotation:20,
        zRotation:30
    }

    serverData.playerData[serverData.currentUniqueID] = playerDataTemplate;

    console.log("Player " + serverData.currentUniqueID + " joined the Game!");
    res.send(serverData.currentUniqueID);

    serverData.currentUniqueID += 1;
    serverData.numberOfPlayers += 1;
    console.log(serverData.playerData);
})

//update the game data for each player when requested
router.post('/update', bodyParser.json(), function(req, res, next) {
    var playerID = res.body.playerID;

    serverData.playerData[playerID].xPos = req.body.xPos;
    serverData.playerData[playerID].xPos = req.body.xPos;
    serverData.playerData[playerID].yPos = req.body.yPos;
    serverData.playerData[playerID].zPos = req.body.zPos;
    serverData.playerData[playerID].xRot = req.body.xRot;
    serverData.playerData[playerID].yRot = req.body.yRot;
    serverData.playerData[playerID].zRot = req.body.zRot;

    console.log(serverData.playerData);
})


module.exports = router;
