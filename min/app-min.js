var app=angular.module("angitNews",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(t,o){t.state("home",{url:"/home",templateUrl:"/home.html",controller:"MainCtrl"}).state("posts",{url:"/posts/{id}",templateUrl:"/posts.html",controller:"PostsCtrl"}),o.otherwise("home")}]),app.factory("posts",[function(){var t={posts:[{title:"post 1",link:"www.google.com",upvotes:5},{title:"post 2",link:"www.google.com",upvotes:2},{title:"post 3",link:"www.google.com",upvotes:15},{title:"post 4",link:"www.google.com",upvotes:9},{title:"AppFactoryTest2",link:"www.google.com",upvotes:9},{title:"post 5",link:"www.google.com",upvotes:4}]};return t}]),app.controller("MainCtrl",["$scope","posts",function(t,o){t.posts=o.posts,t.addPost=function(){t.title&&""!==t.title&&(t.posts.push({title:t.title,link:t.link,upvotes:0,comments:[{author:"Joe",body:"yeahyeah",upvotes:0},{author:"pete",body:"wootwoot",upvotes:0}]}),t.title="",t.link="")},t.incrementUpvotes=function(t){t.upvotes+=1}}]),app.controller("PostsCtrl",["$scope","$stateParams","posts",function(t,o,e){t.post=e.posts[o.id],t.addComment=function(){""!==t.body&&(t.post.comments.push({body:t.body,author:"user",upvotes:0}),t.body="")}}]);