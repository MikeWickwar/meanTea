app.controller('MainController', ['$scope','$http','jsonService','catsService', function ($scope, $http, jsonService, catsService) {
  console.log('made it to main control');
  var cats = [];
  $scope.sortby = "";
  $scope.changeSorter = function (value) {
    console.log('her chaning sorter');
    console.log(value);
    console.log($scope.sortby);
  }

  jsonService.get().then(function (data) {
    $scope.data = data.data;
    $scope.data.forEach(function (item) {
      item.categories.forEach(function (cat) {
        if (($.inArray(cat, cats)) >= 0) {
          }else {
            cats.push(cat)
          }
      })
    })
  }).then(function () {
    $scope.categories = catsService.get($scope.data)
    })

  }])
