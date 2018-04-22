myApp.factory("usersService", function ($http, $q) {
    function User(plainUser) {
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.password = plainUser.password;
        this.score = plainUser.score;
    }
    var users = [];

    function load() {
        var async = $q.defer();

        $http.get('app/data/users.json').then(
            function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    users.push(new User(response.data[i]));
                }

                async.resolve();
                // Testing
                //alert(users[1].lname); 
            }, function (response) {
                $log.error("error in getting user json: " + JSON.stringify(response));
                async.reject();
        });

        return async.promise;
    
    }
  return {
        load: load,
        users: users
       
    }

});