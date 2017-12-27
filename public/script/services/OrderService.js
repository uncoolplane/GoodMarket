angular.module('market').service('OrderService', function($http, $q) {
  var cart = [];
  var _this = this;

  this.addToCart = function (product) {
    product.quantity = 1;
    cart.push(product);
    console.log('OrderService:addToCart', cart);
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
    if(quantity == 0) {
      _this.removeFromCart(product);
    }

    var index = getCartIndex(product);
    console.log('updateQuantity', product);
    if(index < 0)  {
      _this.addToCart(product);
      return
    };
    console.log('updateQuantity', cart[index]);
    if(!cart[index].quantity) cart[index].quantity=0;
    if(cart[index].quantity+quantity == 0) {
      _this.removeFromCart(product);
    }
    cart[index].quantity+=quantity;
    console.log('OrderService:cart', cart);
  }

  this.removeFromCart = function (product) {
    var index = getCartIndex(product);
    console.log('removeFromCart[index]', index);
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

  this.getTotal = function () {
    var total = 0.0;
    for (var i = 0; i < cart.length; i++) {
      var product = cart[i];
      total += product.price * product.quantity;
    }

    return total;
  }
})
