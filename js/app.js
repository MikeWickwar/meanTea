var app = angular.module('meantea', ['ngRoute']);

app.factory('service', function($http) {
    var promise;
    var jsondata = {
        get: function() {
            if ( !promise ) {
                var promise =  $http.get('../json/teas.json').success(function(response) {
                    return response.data;
                });
                return promise;
            }
        }
    };
    return jsondata;
});

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: "MainController"
      })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })
});
