// Require Angular
var app = angular.module('angitNews', ['ui.router'])
  app.factory('posts',[function(){
  	var x = {
  		posts: [
  		{title: 'post 1', link: 'www.google.com', upvotes: 5},
      {title: 'post 2', link: 'www.google.com', upvotes: 2},
      {title: 'post 3', link: 'www.google.com', upvotes: 15},
      {title: 'post 4', link: 'www.google.com', upvotes: 9},
      {title: 'AppFactoryTest2', link: 'www.google.com', upvotes: 9},
      {title: 'post 5', link: 'www.google.com', upvotes: 4}]
  	};
  	return x;
  }]);

// Controller
app.controller('MainCtrl', ['$scope','posts',function($scope, posts){
  $scope.posts = posts.posts;

  $scope.addPost = function(){
  	if(!$scope.title || $scope.title === '') { return;}
  	$scope.posts.push({
  		title: $scope.title,
  		link: $scope.link,
  		upvotes: 0
  	});
  	$scope.title= '';
  	$scope.link = '';
  };

	$scope.incrementUpvotes = function(post) {
	  post.upvotes += 1;
	};
}]);