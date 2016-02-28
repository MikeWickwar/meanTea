app.controller('BagController', ['$scope','$http','jsonService','catsService','cartService', '$q',
 function ($scope, $http, jsonService, catsService, cartService, $q) {
  console.log('made it to bag control');

  $scope.cart = function () {
    var deferred = $q.defer();
    deferred.resolve(cartService.get())
    return deferred.promise
  };
  $scope.cart().then(function (cart) {
    $scope.bigcart = cart;
  })
}])
