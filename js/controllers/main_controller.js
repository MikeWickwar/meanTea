app.controller('MainController', ['$scope','$http','jsonService','catsService','cartService',
 function ($scope, $http, jsonService, catsService, cartService) {
  console.log('made it to main control');
  var cats = [];
  $scope.sortby = "";

  $scope.addItem = function (item) {
    cartService.post(item)
    var test = cartService.get()
    console.log(test, "here hello!");
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
