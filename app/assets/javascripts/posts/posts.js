var app = angular.module('angitNews')

// Factory Service
  app.factory('posts',['$http', function($http){
  	var x = {
  		posts: []
  	};

    x.getAll = function(){
      return $http.get('/posts.json').success(function(data){
        angular.copy(data, post);
    });
  };

    x.create = function(post) {
      return $http.post('/posts.json', post).success(function(data){
          x.posts.push(data);
    });
  };
  	return x;
  }
]);