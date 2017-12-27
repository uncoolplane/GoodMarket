angular.module('market').controller('storeController', function($scope, DepartmentService) {
  $scope.departments = DepartmentService.getDepartments();

  // add animation on hover
  $(".service-box").hover(
  	function () {
  	$(this).find('img').addClass("animated pulse");
  	$(this).find('h2').addClass("animated fadeInUp");
  	},
  	function () {
  	$(this).find('img').removeClass("animated pulse");
  	$(this).find('h2').removeClass("animated fadeInUp");
  	}
  );
})
