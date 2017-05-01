(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        return {
            all: rooms,
            addRoom: function(roomName) { return rooms.$add(roomName); }
         };
    }

    angular
        .module('chatter')
        .factory('Room', ['$firebaseArray', Room]);
})();