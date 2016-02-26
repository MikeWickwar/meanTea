app.controller('MainController', ['$scope','$http','jsonService', function ($scope, $http, jsonService) {
  console.log('made it to main control');
  jsonService.get().then(function (data) {
    console.log(data);
    $scope.data = data;
    })
  }])
