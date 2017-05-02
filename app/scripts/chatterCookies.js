(function() {
    function chatterCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('chatterCurrentUser');
        if (!currentUser || currentUser == '') {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                size: 'sm',
                keyboard: false,
                templateUrl: '/templates/loginModal.html',
                controller: 'LoginModalCtrl as loginModal'
            });
        }
    }

    angular
        .module('chatter')
        .run(['$cookies', '$uibModal', chatterCookies]);
})();