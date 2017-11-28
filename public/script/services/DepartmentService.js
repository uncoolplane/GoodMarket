angular.module('market').service('DepartmentService', function($http, $q) {
  var departments = [
    {name: 'Baby', id: 1},
    {name: 'Bakery', id: 2},
    {name: 'Beauty & Personal Care', id:3},
    {name: 'Beer & Wine', id:4},
    {name: 'Dairy', id:5},
    {name: 'Deli', id:6},
    {name: 'Floral', id:7},
    {name: 'Frozen Food', id:8},
    {name: 'Grocery', id:9},
    {name: 'Health & Nutrition', id:10},
    {name: 'Housewares', id:11},
    {name: 'Meat', id:12},
    {name: 'Non-Foods', id:13},
    {name: 'Pet', id:14},
    {name: 'Produce', id:15},
    {name: 'Seafood', id:16}
  ];

  this.getDepartments = function () {
    return departments;
  }

  this.getDepartment = function (id) {
    var newArray = departments.filter(function (el) {
      return el.id == id;
    });
    return newArray[0];
  }
})
