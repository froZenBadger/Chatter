(function() {
	function MainCtrl($scope, Room, Time, Message) {
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

        $scope.getActiveRoom = function(room) {
            $scope.activeRoom = room.name; 
            $scope.messageArray = Message.getByRoomId(room.$id);
            console.log('room', room);
            console.log($scope.messageArray);
        };
	}
	
	angular
		.module('chatter')
		.controller('MainCtrl', ['$scope', 'Room', 'Time', 'Message', MainCtrl]);
})();
