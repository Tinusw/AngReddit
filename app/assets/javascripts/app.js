// Require Angular
var app = angular.module('angitNews', ['ui.router']);

  // config ui-router
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  	  $stateProvider
  	  .state('home', {
  	  	url: '/home',
  	  	templateUrl: '/home.html',
  	  	controller: 'MainCtrl'
  	  })

  	  .state('posts', {
  	  	url: '/posts/{id}',
  	  	templateUrl: '/posts.html',
  	  	controller: 'PostsCtrl'
  	  });

  	  $urlRouterProvider.otherwise('home');
  }]);

  // Factory Service
  app.factory('posts',['$http', function($http){
  	var x = {
  		posts: [{title:"yo dawg it works", upvotes:3}]
  	};

    x.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, x.posts);
    });
  };
  	return x;
  }]);
  
// Controller
app.controller('MainCtrl', ['$scope','posts',function($scope, posts){

  resolve: {postPromise: ['posts', function(posts){
    return posts.getAll();
    }];
  };

  $scope.posts = posts.posts;

  $scope.addPost = function(){
  	if(!$scope.title || $scope.title === '') { return;}
  	$scope.posts.push({
  		title: $scope.title,
  		link: $scope.link,
  		upvotes: 0,
  		comments: [
  		  {author: 'Joe', body: 'yeahyeah', upvotes: 3},
  		  {author: 'pete', body: 'wootwoot', upvotes: 0}
  		  ]
  	});
  	$scope.title= '';
  	$scope.link = '';
  };

	$scope.incrementUpvotes = function(post) {
	  post.upvotes += 1;
	};
}]);

// Posts Controller

app.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts){
	$scope.post = posts.posts[$stateParams.id];

	$scope.addComment = function(){
		if(!$scope.body === '') { return; }
		$scope.post.comments.push({
			body: $scope.body,
			author: 'user',
			upvotes: 0
		});
		$scope.body= '';
	};

}]);