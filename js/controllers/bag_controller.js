app.controller('BagController', ['$scope','$http','jsonService','catsService','cartService',
 function ($scope, $http, jsonService, catsService, cartService) {
  console.log('made it to bag control');
 $scope.getcart = function () {
   var fullcart = [];
   var cart = cartService.get();
   var itemList = jsonService.get().then(function (itemList) {
     cart.forEach(function (thingInCart) {
       itemList.data.forEach(function (item) {
        if (thingInCart.item === item.name) {
          fullcart.push(thingInCart, item)
        }
       })
     })
   });
 }


}])
