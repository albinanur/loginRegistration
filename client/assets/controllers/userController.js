app.controller('userController', ['$scope','usersFactory', '$location','$routeParams', function(
	$scope, usersFactory, $location, $routeParams) {

	// var index = function () {
 //     	usersFactory.index(function(dataFromFactory) {
 //          	$scope.users = dataFromFactory;
 //          	console.log(dataFromFactory);
	//      })
//      }
 //  index();
	usersFactory.checkStatus(function(dataFromFactory){
	console.log(dataFromFactory)
	$scope.curUser=dataFromFactory;
	})

  	

	$scope.create = function() {
		console.log('hellllooooooo');
		if ($scope.user.password !== $scope.user.confirm_password) {
			alert('alert password');
		} else {
			usersFactory.create($scope.user, function(dataFromFactory) {
	          	$scope.users = dataFromFactory;
	          	if (dataFromFactory.errors) {
	          		$scope.errors = dataFromFactory.errors;
	          		$location.url('/registration');
	          	} else {
	          		$location.url('/success');	
	         	}
	          
	    	});	
		}
	}

}]);