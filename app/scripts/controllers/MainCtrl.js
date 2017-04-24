(function() {
	function MainCtrl($scope, Room, Time) {
        this.title = "Chatter!";

        $scope.roomArray = Room.all;

        $scope.add = function() {
            var data = $scope.room;
            $scope.roomArray.$add(data);
        };
        $scope.today = Time.today;
        $scope.day = Time.day;
	}
	
	angular
		.module('chatter')
		.controller('MainCtrl', ['$scope', 'Room', 'Time', MainCtrl]);
})();
