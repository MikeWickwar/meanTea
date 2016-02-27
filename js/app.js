var app = angular.module('meantea', ['ngRoute']);



app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: "MainController"
      })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })
});
