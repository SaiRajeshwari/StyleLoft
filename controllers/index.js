'use strict';

var Apparel = require('../models/apparelModel');


module.exports = function (router) {
    router.get('/', function (req, res) {
    	Apparel.find({}, function(err, apparels){
    		if(err){
    			console.log(err);
    		}

    		var model = {
    			apparels: apparels
    		}
    		res.render('index', model);
    	});
    });


    router.get('/landing', function (req, res) {
        res.render('landing');
    });

};
