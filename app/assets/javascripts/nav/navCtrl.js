var app = angular.module('angitNews');

app.controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth){
	  // exposing methods
	  $scope.signedIn = Auth.isAuthenticated;
	  $scope.logout = Auth.logout;

	  // on load try access current user
	  Auth.currentUser().then(function (user){
	  	$scope.user = user;
	  });

	  // event listeners to handle auth/login/logout
	  $scope.$on('devise:new-registration', function (e, user){
	  	$scope.user = user;
	  });

	  $scope.$on('devise:login', function(e,user){
	  	$scope.user = user;
	  });

	  $scope.$on('devise:logout', function(e,user){
	  	$scope.user = {};
	  });

}]);