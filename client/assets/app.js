var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/login',{
		templateUrl : 'partials/login.html',
		controller: 'userController'
	})
	.when('/registration',{
		templateUrl : 'partials/registration.html',
		controller: 'userController'
	})
	.when('/success',{
		templateUrl : 'partials/success.html',
	})
	.otherwise({
		redirectTo: '/'
	});
});