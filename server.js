
var express = require('express');
var parseurl = require('parseurl');


var app = express();
var fs = require('fs')
//var ejs = require('ejs')
var path = require('path')
var bodyParser = require("body-parser");  
app.use(bodyParser.urlencoded({ extended: false }));  

//var session = require('express-session')



var server = require('http').createServer(app);

var io = require('socket.io')(server);
var port = process.env.PORT || 8080;



var index = require('./routes/index');
var users = require('./routes/users');
var games = require('./routes/games');

app.use('/', index);
app.use('/users', users);
app.use('/games', games);


server.listen(port, function () {
  console.log('Server listening at port %d', port);
});


var ejs = require('ejs');
app.engine('html',ejs.__express);
app.set('view engine', 'html');


//app.set('views', __dirname + '/public/views');

app.use(express.static(path.join(__dirname, 'public')));




  io.sockets.on('connection', function(socket) {
    socket.emit('id', {
        id: socket.id
    });
    socket.on('shuffleCard', function(data) {
    	var Baccarat = require("./src/baccarat");

		var seed = ""
		for (var i = 0; i < 8; i++) {
			var num = Math.random()*10 ;
			num = parseInt(num, 10);
			str = String(num)
			seed = seed+str	
		}
		var bet={}
		bet.coin ="doge"
		bet.tie=100
		bet.banker=100
		bet.player=100
		bet.balance=1000 //玩家投注前余额
		bet.profit=0
		bet.new_balance=0 //玩家投注後余额    	
    	var baccarat = new Baccarat(String(seed),bet) 
    
        socket.emit('shuffleCard', baccarat.result);
    });

/*
    socket.emit('updateTable', boardOutput.getBoard());



    socket.on('updateRequest', function(data) {
        socket.emit('updateTable', boardOutput.getBoard());
    });

    socket.on('addPlayerRequest', function(data) {
        console.info("socket.on addPlayerRequest",data)
        if(gameState.currentState.addPlayer(board, data)) {
            if(!gameLoop.running) {
                gameLoop.startLoop(io);
            }
            io.sockets.emit('updateTable', boardOutput.getBoard());
            var clientInfo = getClientInfo(socket.id);
            socket.emit('clientInfoUpdate', clientInfo);
        }
    });

    socket.on('splitRequest', function(data) {
       console.info("socket.on splitRequest",data)
        if(gameState.currentState.splitRequest(data)) {
            io.sockets.emit('updateTable', boardOutput.getBoard());
        }
    });

    socket.on('hitRequest', function(data) {
             console.info("socket.on  hitRequest",data)
        if(gameState.currentState.hitRequest(data)) {
            io.sockets.emit('updateTable', boardOutput.getBoard());
        }
    });

    socket.on('standRequest', function(data) {
      console.info("socket.on standRequest",data)
        if(gameState.currentState.standRequest(data)) {
            io.sockets.emit('updateTable', boardOutput.getBoard());
        }
    });

    socket.on('doubleDownRequest', function(data) {
          console.info("socket.on doubleDownRequest",data)
        if(gameState.currentState.doubleDownRequest(data)) {
            io.sockets.emit('updateTable', boardOutput.getBoard());
        }
    });

    socket.on('insuranceRequest', function(data) {
        console.info("socket.on  insuranceRequest",data)
        if(gameState.currentState.insuranceRequest(data)) {
            io.sockets.emit('updateTable', boardOutput.getBoard());
        }

    });


    socket.on('betRequest', function(data) {
       console.info("socket.on  betRequest",data)
        if(gameState.currentState.betRequest(data)) {
            if(!gameLoop.running) { //Handles the case that game has been paused.
                gameLoop.startLoop(io);
                var clientInfo = getClientInfo(socket.id);
                socket.emit('clientInfoUpdate', clientInfo);
            }
            io.sockets.emit('updateTable', boardOutput.getBoard());
        }
    });
*/
    function getClientInfo(id) {
        var clientInfo = {};
        if(clientInfo.position = board.getPlayerIndex(id)) {
            clientInfo.chips = board.playerChips[clientInfo.position];
        } else clientInfo.chips = 0;
        return clientInfo;
    }


  });