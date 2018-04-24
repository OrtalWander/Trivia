myApp.controller('questions',function($scope,questionservice){
    $scope.questions = [];
    questionservice.load().then(function(){
 $scope.questions = questionservice.questions;
    })
        $scope.count = 0;
        $scope.myFunc = function() {
          $scope.count++;
        };
//   step 1: save user's answer
        function validation(userAnswer){
        // step 2: compare to all questions in loop
for(i=0;i<answers.length;i++){
            // if correct- green frame
if (userAnswer===$scope.questionservice.answers){
    console.log("correctAnswer");
}
}
        }


        // in not correct- red frame and green on the correct answer

        // count the correct answer
    }); 
