'use strict';

var mongoose  = require('mongoose');

var employeeModel = function(){
	var employeeSchema = mongoose.Schema({
		ID: String,
		name: String,
		gender: String,
		department: String,
		age: Number,
		designation: String,
		location: String
	});

	return mongoose.model('Employee', employeeSchema);
}

module.exports = new employeeModel();