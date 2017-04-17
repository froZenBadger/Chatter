(function() {
	function MainCtrl(Room) {
        this.title = "Chatter!";
        this.rooms = Room.all();
        this.test = Room.allTest();
	}
	
	angular
		.module('chatter')
		.controller('MainCtrl', ['Room', MainCtrl]);
})();
