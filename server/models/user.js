var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	email: {
		type: String,
	 	unique: true, 
	 	minlength: [2, 'Email is not valid!']
	},
	first_name: {
		type: String, 
		required: true, 
		minlength: [2,'Your name is too short!']
	},
	last_name: {
		type: String, 
		required: true, 
		minlength: [2, 'Your last_name is too short!']
	},
	password: {
		type : String, 
		required: true,
		minlength: [2, 'Your password is not valid']
	},

	birthday: {
		type: Date, 
		default: Date.now 
	},
},{timestamps: true})

var User = mongoose.model('User',UserSchema) 
