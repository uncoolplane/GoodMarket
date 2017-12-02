angular.module('market').controller('storeController', function($scope, DepartmentService) {
  $scope.departments = DepartmentService.getDepartments();

})
