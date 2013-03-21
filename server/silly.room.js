module.exports = function(node, channel) {

	var pathToLogic = './silly.logic.js';

	function SillyRoom() {

		this.name = 'Waiting room for a silly game';
		this.description = 'Silly description';
		this.version = '0.1';
		
		this.minPlayers = 3;
		this.maxPlayers = 10;
		
		
		this.auto_step = false;
		
		this.init = function () {
			
			node.on('UPDATED_PLIST', function() {
				
				console.log('Updated PLIST!!')
				
				var group, i;
				
				if (node.game.pl.length >= node.game.minPlayers) {
					
					// get a random set of player
					group = node.game.pl.getRandom(node.game.minPlayers);
					
					
					for (i = 0; i < group.length; i++) {
						node.remoteSetup('game', sillyClient);
					}
					
					// Create subchannel
					var subchannel = channel.createSubChannel();
					
					// Send the players to the new subchannel
					for (i = 0; i < group.length; i++) {
						node.redirect(subchannel.player.name, group[i].id);
					}

					// Start the logic on the subchannel
					subchannel.startGame(pathToLogic);
					
					// TODO: Destroy Channel when finished
					
				}
			});
		};
	}
	
	return SillyRoom;
};
