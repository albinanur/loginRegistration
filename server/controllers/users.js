var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
	// index: function(req,res){
	//     User.find({}, function(err, usersFromDB) {
	//       res.json({users: usersFromDB});
	//     });
 //    },
 
	create: function(req,res){

    	var user = new User({
			email: req.body.data.email,
			first_name: req.body.data.first_name, 
			last_name: req.body.data.last_name,
			password: req.body.data.password,
			birthday: req.body.data.birthday
		});
		user.save(function(err, data) {
			console.log(user);
			if (err) {
				console.log(err);
				res.json({errors: err.errors});
			} else {
				req.session.user = data;
				req.session.save()
				res.json(data);	
			}
		});
		// console.log(user);
	},
	login: function(req, res){
		console.log('login in express');
		console.log(req.body.email);
		User.findOne({email:req.body.email}, function(err, data){
			if(err){
				console.log(err);
				res.json({errors:'Please register'})

			}else{
				req.session.user = data;
				req.session.save()
				res.json(data);	
			}
		})
	},
	checkStatus: function(req, res){
		if(req.session.user){
			console.log(req.session.user)
			res.json(req.session.user)
		}else{
			res.json(null)
		}
	},

	logout : function(req, res){
		req.session.destroy();
		res.redirect('/');
	}

}