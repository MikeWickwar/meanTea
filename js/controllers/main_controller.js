app.controller('MainController', ['$scope','$http','jsonService','catsService', function ($scope, $http, jsonService, catsService) {
  console.log('made it to main control');
  var cats = [];

  jsonService.get().then(function (data) {
    $scope.data = data.data;

    $scope.data.forEach(function (item) {
      item.categories.forEach(function (cat) {
        console.log(cat);
        if (($.inArray(cat, cats)) >= 0) {
            console.log('i exsist');
          }else {
            cats.push(cat)
          }
      })
    })
  }).then(function () {
    $scope.categories = catsService.get($scope.data)

  })

  // categories =  jsonService.get().then(function (data) {
  //      data.forEach(function (item) {
  //        item.categories.forEach(function (cat) {
  //          if (($.inArray(cat, categories)) >= 0) {
  //            console.log('i exsist');
  //          }else {
  //            categories.push(cat)
  //          }
  //        })
  //      })
  //      })
  }])
