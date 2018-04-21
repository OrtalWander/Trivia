
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
        templateUrl: "app/views/top5.html"
    })
});