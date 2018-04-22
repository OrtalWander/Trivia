myApp.controller('questions',function($scope,questionservice){
    $scope.questions = [];
    questionservice.load().then(function(){
        $scope.questions = questionservice.questions;
    });
});