(function(){
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');

        return {
            getByRoomId: function(roomId) {
                var messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
                return messages;
            }            
        };
    }

    angular
        .module('chatter')
        .factory('Message', ['$firebaseArray', Message]);
})();