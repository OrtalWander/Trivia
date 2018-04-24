myApp.controller('questions', function ($scope, $routeParams, $location, questionservice) {
    $scope.questions = [];
    $scope.currentQuestion = $routeParams.id;
    questionservice.load().then(function () {
        $scope.questions = questionservice.questions;
    })
    $scope.count = 0;
    $scope.myFunc = function () {
        $scope.count++;
    };

    $scope.selectAnswer = function (answer, correctAnswer) {
        $scope.selectedAnswer = null;
        $scope.selectedAnswer = answer;
        $scope.correctAnswer = correctAnswer;
    }

$scope.nextPage=function (){
    $location.path('/game/' + $scope.currentQuestion++);
}
    
});