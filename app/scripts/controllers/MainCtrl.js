(function() {
	function MainCtrl($scope, Room, Time, Message, $uibModal) {

        this.title = "Chatter!";

        $scope.roomArray = Room.all;

        $scope.today = Time.today;
        $scope.day = Time.day;
        $scope.msgTime = Time.msgTime;
        $scope.msgDay = Time.msgDay;

        $scope.getActiveRoom = function(room) {
            $scope.activeRoom = room.name; 
            $scope.messageArray = Message.getByRoomId(room.$id);
        };

        $scope.addRoomModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
            });
        };        

        $scope.signInModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/signInModal.html',
                controller: 'LogModalCtrl as logModal',
            });
        };        
	}

	angular
		.module('chatter')
		.controller('MainCtrl', ['$scope', 'Room', 'Time', 'Message', '$uibModal', MainCtrl]);
})();
