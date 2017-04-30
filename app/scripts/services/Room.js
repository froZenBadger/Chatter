(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        this.addRoom = function(room) {
            rooms.$add(room);
        };

        return {
            all: rooms
         };
    }

    angular
        .module('chatter')
        .factory('Room', ['$firebaseArray', Room]);
})();