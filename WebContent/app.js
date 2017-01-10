var App = angular.module('myApp', ['ngRoute','ngCookies','userApp']);


	App.config(function($routeProvider) 
			{
		
		$routeProvider
		
		.when("/register", {
			templateUrl : "Users/register.html",
			controller : "userctrl"
		})
		.when("/login", {
			templateUrl : "Login/Login.html",
			controller : "loginctrl",
		
		})

		.when("/blog", {
			templateUrl : "Blog/blog.html",
			controller : "blogctrl",
		
		})
		
	});

