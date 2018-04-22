myApp.controller('questions',function($scope,questionservice){
    
    questionservice.load().then(function(){
        $scope.questions=questionservice.questions;
    });
});