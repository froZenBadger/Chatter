(function() {
	function MainCtrl($scope, Room, Time) {
        this.title = "Chatter!";

        $scope.roomArray = Room.all;
        
        // this is used in modal to add input to array
        $scope.add = function() {
            var data = $scope.room;
            $scope.roomArray.$add(data);
        };
        // ways to access time 
        $scope.today = Time.today;
        $scope.day = Time.day;
        $scope.msgTime = Time.msgTime;
        $scope.msgDay = Time.msgDay;

        $scope.getActiveRoom = function($event) {
            var xy = (function() {
                var element = $event.currentTarget;
                activeRoom = element.innerHTML;
            })();
            $scope.activeRoom = activeRoom;    
        }
	}
	
	angular
		.module('chatter')
		.controller('MainCtrl', ['$scope', 'Room', 'Time', MainCtrl]);
})();
