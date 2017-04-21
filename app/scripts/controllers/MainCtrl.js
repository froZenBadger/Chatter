(function() {
	function MainCtrl(Room) {
        this.title = "Chatter!";
        this.rooms = Room.all;
	}
	
	angular
		.module('chatter')
		.controller('MainCtrl', ['Room', MainCtrl]);
})();
