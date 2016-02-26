app.controller('MainController', ['$scope','$http','service', function ($scope, $http, service) {
  console.log('made it to main control');
  service.get().then(function (d) {
    console.log(d);
  })
  }])
