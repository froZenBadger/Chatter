(function() {
    function ModalCtrl(Room, $uibModalInstance, $scope) {

        this.add = function() {
            Room.addRoom($scope.room);
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };  
    }

    angular
        .module('chatter')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$scope', ModalCtrl]);
})();