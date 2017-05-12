'use strict';

var mongoose  = require('mongoose');

var credentialModel = function(){
	var credentialSchema = mongoose.Schema({
		username: String,
		password: String
	});

	return mongoose.model('Credential', credentialSchema);
}

module.exports = new credentialModel();