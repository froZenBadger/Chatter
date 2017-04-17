(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        Room.allTest = function() {
            return rooms;
        };
        Room.all = function() {
            return {
                all: rooms
            };
        };
    }

    angular
        .module('chatter')
        .factory('Room', ['$firebaseArray', Room]);
})();