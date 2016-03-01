app.controller('MainController', ['$scope','$http','jsonService','catsService','cartService','$q',
 function ($scope, $http, jsonService, catsService, cartService, $q) {
  var cats = [];
  $scope.sortby = "";
  $scope.bagsize= "Bag is empty"
  $scope.quantity=1;
  $scope.addItem = function (item) {
    cartService.post(item)
  }
  $scope.changeBag = function () {
      var cart  = function () {
        var deferred = $q.defer();
        deferred.resolve(cartService.get())
        return deferred.promise
      }
      cart().then(function (cart) {
        $scope.bagsize = 0;
        cart.forEach(function (item) {
           $scope.bagsize += parseInt(item.quantity);
        })
      })
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
