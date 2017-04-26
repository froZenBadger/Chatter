(function() {
	function MainCtrl($scope, Room, Time, $uibModal) {
        this.title = "Chatter!";

        $scope.roomArray = Room.all;

        $scope.add = function() {
            var data = $scope.room;
            $scope.roomArray.$add(data);
        };
        $scope.today = Time.today;
        $scope.day = Time.day;
        $scope.msgTime = Time.msgTime;
        $scope.msgDay = Time.msgDay;

        var activeRoom;

        $scope.getActiveRoom = function($event) {
            var xy = (function() {
                var element = $event.currentTarget;
                activeRoom = element.innerHTML;
            })();
            $scope.activeRoom = activeRoom;    
        }

        $scope.addRoomModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
            });
        }        
	}
	
	angular
		.module('chatter')
		.controller('MainCtrl', ['$scope', 'Room', 'Time', '$uibModal', MainCtrl]);
})();
