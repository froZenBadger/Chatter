(function() {
	function MainCtrl($scope, Room, Time, Message, $uibModal, $cookies) {

        this.title = "Chatter!";

        $scope.roomArray = Room.all;

        $scope.today = Time.today;
        $scope.day = Time.day;
        $scope.msgTime = Time.msgTime;
        $scope.msgDay = Time.msgDay;

        // $scope.activeUser = null;
        // $scope.currentUser = (function() {
        //     if($cookies.get('chatterCurrentUser') !== '') {
        //         $scope.activeUser = ($cookies.getObject('chatterCurrentUser'));
        //     } else { 'please sign in';}
        // })();
        $scope.currentUser = function() {
            if($cookies.getObject('chatterCurrentUser') !== '') {
                return ($cookies.getObject('chatterCurrentUser')).name;
            } else { 'please sign in';}
        }

        $scope.getActiveRoom = function(room) {
            $scope.activeRoom = room.name; 
            $scope.messageArray = Message.getByRoomId(room.$id);
        };

        $scope.addRoomModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };        

        $scope.signInModal = function() {
            let userCookie = 'chatterCurrentUser';
            $cookies.putObject(userCookie, '');
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                size: 'sm',
                keyboard: false,
                templateUrl: '/templates/loginModal.html',
                controller: 'LoginModalCtrl as loginModal'
            });
        };        
    }

	angular
		.module('chatter')
		.controller('MainCtrl', ['$scope', 'Room', 'Time', 'Message', '$uibModal', '$cookies', MainCtrl]);
})();
