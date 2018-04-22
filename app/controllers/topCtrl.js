myApp.controller('topCtrl',function($scope,usersService){
    
    usersService.load().then(function(){
        $scope.users=usersService.users;
    });
});