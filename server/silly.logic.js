module.exports = function(node, channel) {
	

	var	JSUS = require('JSUS').JSUS,
		sillyClient = require('./silly.client');
		
	var strSillyClient = JSUS.stringify(sillyClient, 2);
	
	function SillyLogic() {
		
		this.name = 'Game logic for a silly game';
		this.description = 'Silly description';
		this.version = '0.1';
		
		this.minPlayers = 3;
		this.maxPlayers = 3;
		
		this.auto_step = true;
		
		this.init = function () {
			// Setup the Game
			node.remoteSetup('game', strGameClient, 'ALL');
			
			// TODO: should we wait a bit?
			
			var msg = node.msg.create({
				action: node.action.SAY,
				target: 'GAMECOMMAND',
				data: {},
				text: 'start',
				to: 'ALL'
			});

			node.socket.send(msg);

		};
				
	}	

	return SillyLogic;
};