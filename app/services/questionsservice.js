myApp.factory("questionservice", function ($http, $q) {
    function Question (questionsData) {
        this.question = questionsData.question;
        this.answers = shuffle(questionsData.incorrect_answers.concat(questionsData.correct_answer));
        this.correct_answer = questionsData.correct_answer;
        this.incorrect_answers = questionsData.incorrect_answers;
    }
       var questions = [];

       function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    function load() {
        var async = $q.defer();

        $http.get('https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=multiple').then(
            function (response) {
                for (var i = 0; i < response.data.results.length; i++) {
                    
                    questions.push(new Question(response.data.results[i]));
                }

                async.resolve();
                // Testing
                //alert(users[1].lname); 
            }, function (response) {
                $log.error("error in getting question json: " + JSON.stringify(response));
                async.reject();
        });

        return async.promise;
    
    }
  return {
        load: load,
        questions:questions
    }
    
});