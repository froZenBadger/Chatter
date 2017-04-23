(function() {
	function MainCtrl($scope, Room) {
        this.title = "Chatter!";

        $scope.roomArray = Room.all;

        $scope.add = function() {
            $scope.roomArray.$add($scope.room);
        };
	}
	
	angular
		.module('chatter')
		.controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
})();
