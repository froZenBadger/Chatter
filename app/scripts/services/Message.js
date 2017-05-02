(function(){
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messageDb = $firebaseArray(ref);

        return {
            getByRoomId: function(roomId) {
                var messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
                return messages;
            },
            send: function(newMessage) {
                return messageDb.$add(newMessage);
            }            
        };
    }

    angular
        .module('chatter')
        .factory('Message', ['$firebaseArray', Message]);
})();