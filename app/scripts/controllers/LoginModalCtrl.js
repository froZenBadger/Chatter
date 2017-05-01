(function() {
    function LoginModalCtrl(Room, $uibModalInstance, $scope) {

        // this.signIn = function () {};

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };  
    }

    angular
        .module('chatter')
        .controller('LoginModalCtrl', ['Room', '$uibModalInstance', '$scope', LoginModalCtrl]);
})();