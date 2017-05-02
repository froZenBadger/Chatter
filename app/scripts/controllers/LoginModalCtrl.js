(function() {
    function LoginModalCtrl($uibModalInstance, $scope, $cookies) {

        this.login = function() {
            let userCookie = 'chatterCurrentUser';
            if ($scope.user.name !== '') {
                let user = $cookies.putObject(userCookie, $scope.user);
                $uibModalInstance.close();    
            }
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };  
    }

    angular
        .module('chatter')
        .controller('LoginModalCtrl', ['$uibModalInstance', '$scope', '$cookies', LoginModalCtrl]);
})();