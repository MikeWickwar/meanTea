app.controller('MainController', ['$scope','$http','jsonService','catsService','cartService','$q',
 function ($scope, $http, jsonService, catsService, cartService, $q) {
  console.log('made it to main control');
  var cats = [];
  $scope.sortby = "";
  $scope.bagsize= "Bag is empty"
  $scope.quantity=1;
  $scope.addItem = function (item) {
    cartService.post(item)
  }
  $scope.changeBag = function () {
      console.log('you got it');
      // var cart  = cartService.get()
      var cart  = function () {
        console.log('promise land');
        var deferred = $q.defer();
        deferred.resolve(cartService.get())
        return deferred.promise
      }
      cart().then(function (cart) {
        console.log(cart);
        $scope.bagsize = 0;
        cart.forEach(function (item) {
          console.log(item.quantity);
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
