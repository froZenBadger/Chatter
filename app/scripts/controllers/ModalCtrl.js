(function() {

    function ModalCtrl($scope, $timeout, $dialog){
        $timeout(function(){
            $dialog.dialog({}).open('/scripts/templates/directives/chatRoomModal.html');  
        }, 3000);  
    }

    angular
        .module('chatter')
        .controller('ModalCtrl', ['ui.bootstrap', ModalCtrl]);
})();