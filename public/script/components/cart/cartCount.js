angular.module('martket').component('cartCount', {
  templateUrl: '../script/components/cart/cartcount.html',
  bindings : {
    //< - single way binding, = - double way binding (performance if use, don't), @ - string, & - function
  },
  controller: function($scope, OrderService) {
    console.log('bindings', $scope);
    $scope.count = OrderService.getCartQuantity();
  },
  controllerAs: '$ctrl' //default controller, but you could name something else
})


//<modal title="" message=""></modal>  -- single word
//<confirmation-modal></confirmation-modal> -- camel case word
