(function() {
    function ModalCtrl(Room, $uibModalInstance, Time){
        // Dismiss modal with new room added to Database/Home Page
        this.add = function(roomName) {
            var data = $scope.room;
            $scope.roomArray.$add(data);
        // Move your add room logic here.  Something like:  Room.addRoom(roomName); 
            $uibModalInstance.close();
        };
        // Dismiss modal without any changes
        this.cancel = function() {
            $uibModalInstance.dismiss();
        };  
        this.day = Time.day;
    }

    angular
        .module('chatter')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', 'Time', ModalCtrl]);
})();