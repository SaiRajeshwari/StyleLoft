'use strict';

var Apparel = require('../models/apparelModel');
var Category = require('../models/categoryModel');

module.exports = function(router){
	router.get('/', function(req, res){
		res.render('index');
	});

	router.get('/details/:id', function(req, res){
		Apparel.findOne({_id: req.params.id}, function(err, apparel){
			if(err){
				console.log(err);
			}
			var model = {
				apparel: apparel
			};

			res.render('apparels/details', model);
			
		});
		
	});
}