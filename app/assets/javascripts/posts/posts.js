var app = angular.module('angitNews');

// Factory Service
  app.factory('posts',['$http', function($http){
  	var x = {
  		posts: []
  	};
    
    // return all posts method
    x.getAll = function(){
      return $http.get('/posts.json').success(function(data){
          angular.copy(data, x.posts);
      });
    };


    // get a post with comments
    x.get = function(id) {
      return $http.get('/posts/' + id + '.json').then(function(res){
        return res.data;
      });
    };

    // create post method
    x.create = function(post) {
      return $http.post('/posts.json', post).success(function(data){
          x.posts.push(data);
      });
    };

    // upvote a post method
    x.upvote = function(post) {
      return $http.put('/posts/' + post.id + '/upvote.json').success(function(data){
        post.upvotes += 1;
      });
    };

    
    // add a comment to a post
    x.addComment = function(id, comment) {
      return $http.post('/posts/' + id + '/comments.json', comment);
    };

    x.upvoteComment = function(post, comment) {
      return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json').success(function(data){
        comment.upvotes += 1;
      });
    };

  	return x;
    
  }
]);