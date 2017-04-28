(function(){
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var query = ref.orderByChild("roomId").equalTo(roomId);

        return {
            getByRoomId: function(roomId) {
                var messages = $firebaseArray(ref);
            }            
        };
    }

    angular
        .module('chatter')
        .factory('Message', ['$firebaseArray', Message]);
})();