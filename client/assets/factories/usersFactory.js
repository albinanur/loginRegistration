app.factory('usersFactory', ['$http', '$location', function($http, $location){
	var factory = {};
	var users = [];

	// factory.index = function(callbackToController) {
 //      $http.get('/users').then(function(json){
 //        // console.log(json.data.friends);
 //        callbackToController(json.data.users);
 //      });
 //  	}
	factory.create = function(new_user, callback) {
 		$http.post('/new_user', {data: new_user}).then(function(returned_data){
        	console.log(returned_data.data);
          	callback(returned_data.data);
      	});
  	}
  	factory.login = function(user){
      console.log(user);
      $http.post('/login', user).then(function(returned_data){
        if(returned_data.data){
          $location.url('/success')
        }
      })
  	}
    factory.checkStatus = function(callbackToController){
      $http.get('/checkStatus').then(function(returned_data){
        callbackToController(returned_data.data);
      })
    }
  	return factory;
}]);