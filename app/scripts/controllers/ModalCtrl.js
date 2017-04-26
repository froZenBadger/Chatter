(function() {

    function ModalCtrl(Room, $uibModalInstance){

    }

    angular
        .module('chatter')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();