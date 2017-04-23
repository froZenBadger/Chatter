(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl as main', 
                templateUrl: '/templates/main.html'
            })
            .state('create', {
                url: '/create',
                controller: 'Create_Ctrl as create',
                templateUrl: '/templates/PLACE2.html'
            })
            .state('PLACE3', {
                url: '/',
                controller: 'PLACE3Ctrl as PLACE3',
                templateUrl: '/templates/PLACE3.html'
            });
    }
    
    angular
        .module('chatter', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();
           