(function() {
	function MainCtrl($scope, Room, Time, $uibModal) {
        this.title = "Chatter!";

        $scope.roomArray = Room.all;

        
        $scope.today = Time.today;
        $scope.day = Time.day;
        $scope.msgTime = Time.msgTime;
        $scope.msgDay = Time.msgDay;

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