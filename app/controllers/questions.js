myApp.controller('questions', function ($scope, questionservice) {
    $scope.questions = [];
    questionservice.load().then(function () {
        $scope.questions = questionservice.questions;
    })
    $scope.count = 0;
    $scope.myFunc = function () {
        $scope.count++;
    };
    //   step 1: save user's answer
    $scope.validation = function(userAnswer, correctAnswer) {
        if(userAnswer === correctAnswer){
            alert ("Correct");
        }
        
    }


    // in not correct- red frame and green on the correct answer

    // count the correct answer
});