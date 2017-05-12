'use strict';

var mongoose  = require('mongoose');

var apparelModel = function(){
	var apparelSchema = mongoose.Schema({
		title: String,
		description: String,
		category: String,
		price: Number,
		cover: String
	});

	return mongoose.model('Apparel', apparelSchema);
}

module.exports = new apparelModel();