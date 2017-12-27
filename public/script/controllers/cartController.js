angular.module('market').controller('cartController', function($scope, OrderService, ProductService, UserService) {
  $scope.products = OrderService.getCart();
  $scope.total = OrderService.getTotal();

  $scope.removeFromCart = function (id) {
    var product = ProductService.getProduct(id);
    if(OrderService.cartHasProduct(product)) {
      OrderService.updateQuantity(product, 0);
    }

    $scope.products = OrderService.getCart();
    $scope.total = OrderService.getTotal();
  }

  $scope.updateQuantity = function (id, quantity) {
    var product = ProductService.getProduct(id);
    if(OrderService.cartHasProduct(product)) {
      OrderService.updateQuantity(product, quantity);
    }

    $scope.products = OrderService.getCart();
    $scope.total = OrderService.getTotal();
  }
})
