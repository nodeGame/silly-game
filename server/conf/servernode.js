// This file gets automatically read by the nodeGame server
module.exports = function(sn) {
	
	var waitingRoom = sn.addChannel({
		name: 'room',
		admin: 'room/admin',
		player: 'room/wait',
		game: 'wait',
	});

	var silly = sn.addChannel({
					    name: 'silly',
					    admin: 'silly/admin',
					    player: 'silly',		    	
	});


	// We can load a game here
	var path = require('path');

//	console.log(__dirname)
	
	var room_logic = path.resolve(__dirname, '../silly.room.js');
	sn.startGame('room', room_logic);
	
	return true;
};



