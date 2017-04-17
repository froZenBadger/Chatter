(function() {
	function MainCtrl() {
        this.title = "Chatter!";
	}
	
	angular
		.module('chatter')
		.controller('MainCtrl', [MainCtrl]);
}();
