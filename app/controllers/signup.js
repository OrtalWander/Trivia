function myController($scope){
    $scope.submitMyForm=function(){
        /* while compiling form , angular created this object*/
        var data=$scope.fields;  
        /* post to server*/
        $http.post("app/data/users.json", data);        
    }

}