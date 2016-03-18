// require Angular Module 

var app = angular.module('angitNews', []);

app.controller('MainCtrl', ['$scope', function($scope){
		$scope.test = "hello World";

		$scope.posts = [
		'post1',
		'post2',
		'post3',
		'post4',
		'post5',
		];
}]);