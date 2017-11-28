angular.module('market').controller('departmentDetailsController', function($scope, DepartmentService, ProductService, $stateParams, OrderService) {
  const id = $stateParams.id;
  $scope.department = DepartmentService.getDepartment(id);
  $scope.products = ProductService.getProductsByCategory(id);

  $scope.addToCart = function (id) {
    var product = ProductService.getProduct(id);
    if(OrderService.cartHasProduct(product)) {
      OrderService.updateQuantity(product, 1);
    } else {
      OrderService.addToCart(product);
    }
  }
})
