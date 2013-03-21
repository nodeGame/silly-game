function Silly() {
	
	this.init = function() {
		
	};
	
	this.loop = {
			1: function() {
				W.load('html/state1.html', function(){
					var b = W.getElementById('DONE');
					
					b.onclick = node.DONE;
				});
			}
	};
}