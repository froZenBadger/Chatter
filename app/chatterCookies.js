(function() {
    function chatterCookies($cookies) {
        var currentUser = $cookies.get('chatterCurrentUser');
        if (!currentUser || currentUser == '') {
            $uibModal.open({
                animation: true,
                backdrop: 'static',
                controller: ,
                template:     <div class="container next">
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="modal fade" data-keyboard="false" data-backdrop="static" id="createRoomModal" tabindex="-1">
                                                <div class="modal-dialog modal-sm">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button class="close" data-dismiss="modal">&times;</button>
                                                            <h4 class="modal-title">Create new room</h4>
                                                        </div>         
                                                        <div class="modal-body">
                                                            <form>
                                                                <div class="form-group">
                                                                    <label for="inputRoomName">Enter a room name</label>
                                                                    <input class="form-control" placeholder="My New Room" type="text" id="inputRoomName" ng-model="room.name"> 
                                                                    <label for="inputDate">Created on:</label>
                                                                    <input class="form-control" placeholder="{{ day }}" type="text" id="inputDate" ng-model="room.dateCreated">
                                                                </div>
                                                            </form>    
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                                            <button type="button" ng-click="add()" class="btn btn-primary" data-dismiss="modal">Create room</button>
                                                        </div>      
                                                    </div>                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>,
            })
    }

    angular
        .module('chatter')
        .run(['$cookies', '$uibModal', chatterCookies]);
})();