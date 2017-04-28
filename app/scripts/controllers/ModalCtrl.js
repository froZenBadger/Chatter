(function() {
    function ModalCtrl(Room, $uibModalInstance){
        // Dismiss modal with new room added to Database/Home Page
        this.add = function(roomName) {
        	// Move your add room logic here.  Something like:  Room.addRoom(roomName); 
            $uibModalInstance.close();
        }
        // Dismiss modal without any changes
        this.cancel = function() {
            $uibModalInstance.dismiss();
        }  

    }

    angular
        .module('chatter')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();