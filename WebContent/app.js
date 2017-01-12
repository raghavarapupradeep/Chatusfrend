var app = angular.module('myApp', ['ngRoute','ngCookies','userApp','blogapp','friendApp']);


	app.config(function($routeProvider) 
			{
		
		$routeProvider
		.when("/home", {
			templateUrl : "Home.html",
			controller : 'LoginController',
			controllerAs : 'vm'
		})
		
		.when("/register", {
			templateUrl : "Users/register.html",
			controller : "userctrl"
		})
		.when("/login", {
			templateUrl : "Login/Login.html",
			controller : 'LoginController',
			controllerAs : 'vm'
		
		})

		.when("/blog", {
			templateUrl : "Blog/blog.html",
			controller : "blogctrl",
		
		})
		.when("/users", {
			templateUrl : "Friends/AllUsers.html",
			controller : "alluserctrl",
		
		})
		
	});