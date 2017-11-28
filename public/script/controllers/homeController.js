angular.module('market').controller('homeController', function($scope, DepartmentService) {
  $scope.departments = DepartmentService.getDepartments();
})
