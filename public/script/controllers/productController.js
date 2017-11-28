angular.module('market').controller('productController', function($scope, ProductService, $stateParams, DepartmentService, OrderService) {
  const id = $stateParams.id;
  $scope.product = ProductService.getProduct(id);
  $scope.department = DepartmentService.getDepartment($scope.product.categoryid);

  $scope.addToCart = function () {
    if(OrderService.cartHasProduct($scope.product)) {
      OrderService.updateQuantity($scope.product, 1);
    } else {
      OrderService.addToCart($scope.product);
    }
  }

  $scope.isInCart = function () {
    return OrderService.cartHasProduct($scope.product);
  }

  $scope.removeFromCart = function () {
    if($scope.product.quantity == 1) {
      OrderService.removeFromCart($scope.product);
    } else {
      OrderService.updateQuantity($scope.product, -1)
    }
  }
})
