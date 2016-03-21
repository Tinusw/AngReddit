// Require Angular
var app = angular.module('angitNews', ['ui.router', 'templates']);

  // config ui-router
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  	  $stateProvider
  	  .state('home', {
  	  	url: '/home',
  	  	templateUrl: 'home/_home.html',
  	  	controller: 'MainCtrl'
  	  })

  	  .state('posts', {
  	  	url: '/posts/{id}',
  	  	templateUrl: 'posts/_posts.html',
  	  	controller: 'PostsCtrl'
  	  });

  	  $urlRouterProvider.otherwise('home');
}]);
