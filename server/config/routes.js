var usersController = require('../controllers/users.js');
module.exports = function(app){
	// app.get('/users', function(req, res) {
	// 	usersController.index(req, res);
	// });
	app.post('/new_user', function(req, res) {
		usersController.create(req, res);
	});
	app.post('/login', function(req,res){
		usersController.login(req,res);
	})
	app.get('/checkStatus',function(req,res){
		usersController.checkStatus(req, res);
	})
	app.get('/logout', function(req, res){
		usersController.logout(req, res);
	})

}