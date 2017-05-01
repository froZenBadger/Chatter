(function() {
    function LogModalCtrl($uibModalInstance, $scope) {

        // this.signIn = function () {};

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };  
    }

    angular
        .module('chatter')
        .controller('LogModalCtrl', ['Room', '$uibModalInstance', '$scope', LogModalCtrl]);
})();