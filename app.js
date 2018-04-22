
var myApp = angular.module ('myApp',['ngRoute']);

myApp.config (function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "app/views/home.html"
    })
    .when("/login", {
        templateUrl: "app/views/login.html"
    })
    .when("/top5", {
        templateUrl: "app/views/top5.html",
        // controller: "topCtrl"
    })
    .when("/contact", {
        templateUrl: "app/views/contact.html"
    })
    .when("/signup", {
        templateUrl: "app/views/signup.html"
    })
    .when("/game", {
        templateUrl: "app/views/game.html",
        controller: "questions"
    })
});