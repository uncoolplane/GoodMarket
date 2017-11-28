angular.module('market', ['ui.router', 'ngAnimate', 'ngTouch', 'ngMessages']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './script/views/home.html',
    controller: 'homeController'
  })
  .state('login', {
    url: '/login',
    templateUrl: './script/views/login.html',
    controller: 'loginController'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: './script/views/profile.html',
    controller: 'profileController'
  })
  .state('department', {
    url: '/department/:id',
    templateUrl: './script/views/departmentdetails.html',
    controller: 'departmentDetailsController'
  })
  .state('shoppinglists', {
    url: '/shoppinglist',
    templateUrl: './script/views/shoppinglists.html',
    controller: 'shoppingListController'
  })
  .state('shoppinglist', {
    url: '/shoppinglist/:id',
    templateUrl: './script/views/shoppinglistdetails.html',
    controller: 'shoppingListDetailsController'
  })
  .state('product', {
    url: '/product/:id',
    templateUrl: './script/views/productdetails.html',
    controller: 'productController'
  })
  .state('search', {
    url: '/search',
    templateUrl: './script/views/searchresults.html',
    controller: 'searchController'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './script/views/shoppingcart.html',
    controller: 'cartController'
  })
  .state('checkout', {
    url: '/checkout',
    templateUrl: './script/views/checkout.html',
    controller: 'checkoutController'
  })
  .state('orders', {
    url: '/orders',
    templateUrl: './script/views/orderhistory.html',
    controller: 'historyController'
  })
})
