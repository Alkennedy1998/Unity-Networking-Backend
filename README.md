# Node backend for Offworld 
## Offworld is a multiplayer space racing game built in unity. This respository contains the code for the backend build with node.js
## The authoritative client-server architecture handles all multiplayer interactions such as joining games and refreshing player positions. 



### The following is a list of APIs in progress:

    /gameManager
        POST /addPlayer Registers new player on server
            Parameters: 
                ID: playerID 
                Datatype: Number
                Description: Unique ID of player joining
                
                ID: gameID
                Datatype: Number
                Description: Unique ID of game to join
                
        GET /update Send current player info
            Response: 
            {
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
    /users
        
