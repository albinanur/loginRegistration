app.controller('loginController', ['$scope', 'usersFactory', function($scope, usersFactory){
	
	$scope.login = function(){
		console.log('login');
		if(!$scope.user){
			alert('Please type smth');	
		}else{
			usersFactory.login($scope.user);
		}
	}
}])