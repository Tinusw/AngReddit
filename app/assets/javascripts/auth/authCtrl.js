var app = angular.module('angitNews');

// Creates promises we can use to redirect to home!
app.controller('AuthCtrl', ['$scope', '$state', 'Auth', function($scope, $state, Auth){

	// login Function
	$scope.login = function() {
		Auth.login($scope.user).then(function(){
			$state.go('home');
		});
	};

	// register Function
	$scope.register = function() {
		Auth.register($scope.user).then(function(){
			$state.go('home');
		});
	};

}]);