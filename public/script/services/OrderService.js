angular.module('market').service('OrderService', function($http, $q) {
  var cart = [];
  var _this = this;

  this.addToCart = function (product) {
    product.quantity = 1;
    cart.push(product);
    console.log('OrderService:cart', cart);
  }

  function getCartIndex(product) {
    for(var i = 0; i < cart.length; i++) {
      if(cart[i].id == product.id) {
        return i;
      }
    }
    return -1;
  }

  this.cartHasProduct = function (product) {
    var index = getCartIndex(product);
    return index > -1;
  }

  this.updateQuantity = function (product, quantity) {
    var index = getCartIndex(product);
    if(index < 0) return;
    cart[index].quantity+=quantity;
    console.log('OrderService:cart', cart);
  }

  this.removeFromCart = function (product) {
    var index = getCartIndex(product);
    if(index > -1) {
      cart.splice(index, 1);
    }
  }

  this.getCartQuantity = function () {
    return cart.length;
  }

  this.getCart = function () {
    return cart;
  }
})
