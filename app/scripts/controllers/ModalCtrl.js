(function() {
    function ModalCtrl(Room, $uibModalInstance) {

        this.add = function(roomName) {
            // var data = $scope.room;
            Room.addRoom(roomName);
        // Move your add room logic here.  Something like:  Room.addRoom(roomName); 
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };  
    }

    angular
        .module('chatter')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();