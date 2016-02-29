app.controller('BagController', ['$scope','$http','jsonService','catsService','cartService', '$q',
 function ($scope, $http, jsonService, catsService, cartService, $q) {
  console.log('made it to bag control');
  $scope.total = 0000
  $scope.toggleQ = true;
  $scope.quantity=0;

  $scope.edit = function (item, quantity) {
    $scope.toggleQ = !$scope.toggleQ
    console.log(item,"+_+_+_+_+_+_");
    $scope.cart().then(function (cart) {
      cart.forEach(function (thingInCart) {
        if (thingInCart.item.name === item.i.item.name){
          thingInCart.quantity = item.quantity;
          $scope.cartTotal();
        }
      })
    })
  }
  $scope.remove = function (item) {
    console.log('hello', item);
    $scope.cart().then(function (cart) {
      cart.forEach(function (thingInCart) {
        if (thingInCart.item.name === item.item.name) {
          console.log(thingInCart);
          $scope.total -= thingInCart.item.price * thingInCart.quantity
          cart.splice(cart.indexOf(thingInCart), 1);
        }
      })
    })
  }
  $scope.cart = function () {
    var deferred = $q.defer();
    deferred.resolve(cartService.get())
    return deferred.promise
  };
  $scope.cart().then(function (cart) {
    $scope.bigcart = cart;
    $scope.cartTotal = function () {
      var total = 0;
      cart.forEach(function (thingInCart) {
        total += parseInt(thingInCart.item.price) * parseInt(thingInCart.quantity);
        $scope.total =  total
      })
    }
    var total = $scope.cartTotal();
  })
}])
