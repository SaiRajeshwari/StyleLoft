'use strict';

var Apparel = require('../models/apparelModel');
var Category = require('../models/categoryModel');
var Employee = require('../models/employeeModel');

module.exports = function(router){
	router.get('/', function(req, res){
		res.render('manage/index');
	});

	router.get('/apparels', function(req, res){
		Apparel.find({}, function(err, apparels){
    		if(err){
    			console.log(err);
    		}

    		var model = {
    			apparels: apparels
    		}
    		res.render('manage/apparels/index', model);
    	});
	});

	router.get('/apparels/add', function(req, res){
		Category.find({}, function(err, categories){
			if(err){
				console.log(err);
			}
			
			var model = {
				categories: categories
			}
			res.render('manage/apparels/add', model);
		});
	});

	router.post('/apparels', function(req, res){
		var title = req.body.title && req.body.title.trim();
		var description = req.body.description && req.body.description.trim();
		var category = req.body.category && req.body.category.trim();
		var price = req.body.price && req.body.price.trim();
		var cover = req.body.cover && req.body.cover.trim();

		if(title == '' || price == ''){
			req.flash('error', "Please fill out the required fields");
			res.location('/manage/apparels/add');
			res.redirect('/manage/apparels/add');
		}

		if(isNaN(price)){
			req.flash('error', "Price must be a number");
			res.location('/manage/apparels/add');
			res.redirect('/manage/apparels/add');
		}

		var newApparel = new Apparel({
			title: title,
			description: description,
			category: category,
			price: price,
			cover: cover
		});


		newApparel.save(function(err){
			if(err){
				console.log('SAVE ERROR: ', err);
			}
			req.flash('success', "Apparel Added");
			res.location('/manage/apparels');
			res.redirect('/manage/apparels');
		});

	});

	router.get('/categories', function(req, res){
		res.render('manage/categories/index');
	});

	router.get('/apparels/edit/:id', function(req, res){
		Category.find({}, function(err, categories){
			Apparel.findOne({_id:req.params.id}, function(err, apparel){
				if(err){
					console.log(err);
				}
				var model = {
					apparel: apparel,
					categories: categories
				};
				res.render('manage/apparels/edit', model);
			});
		});
	});


	router.post('/apparels/edit/:id', function(req, res){
		var title = req.body.title && req.body.title.trim();
		var description = req.body.description && req.body.description.trim();
		var category = req.body.category && req.body.category.trim();
		var price = req.body.price && req.body.price.trim();
		var cover = req.body.cover && req.body.cover.trim();

		Apparel.update({_id:req.params.id}, {
			title: title,
			description: description,
			category: category,
			price: price,
			cover: cover
		}, function(err){
			if(err){
				console.log('update error', err);
			}
			req.flash('success', "Apparel Updated");
			res.location('/manage/apparels');
			res.redirect('/manage/apparels');
		});
	});


	router.post('/apparels/delete/:id', function(req, res){
		Apparel.remove({_id:req.params.id}, function(err){
			if(err){
				console.log(err);
			}
			req.flash('success', "Apparel Deleted");
			res.location("/manage/apparels");
			res.redirect("/manage/apparels");
		});
	});


///////////////////////////

	router.get('/employees', function(req, res){
		Employee.find({}, function(err, employees){
    		if(err){
    			console.log(err);
    		}

    		var model = {
    			employees: employees
    		}
    		res.render('manage/employees/index', model);
    	});
	});

	router.get('/employees/add', function(req, res){
		res.render('manage/employees/add');
	});


	router.post('/employees', function(req, res){
		var ID = req.body.ID && req.body.ID.trim();
		var name = req.body.name && req.body.name.trim();
		var gender = req.body.gender && req.body.gender.trim();
		var department = req.body.department && req.body.department.trim();
		var age = req.body.age && req.body.age.trim();
		var designation = req.body.designation && req.body.designation.trim();
		var location = req.body.location && req.body.location.trim();

		if(ID == '' || name == ''){
			req.flash('error', "Please fill out the required fields");
			res.location('/manage/employees/add');
			res.redirect('/manage/employees/add');
		}


		var newEmployee = new Employee({
			ID: ID,
			name: name,
			gender: gender,
			department: department,
			age: age,
			designation: designation,
			location: location
		});


		newEmployee.save(function(err){
			if(err){
				console.log('SAVE ERROR: ', err);
			}
			req.flash('success', "Employee Added");
			res.location('/manage/employees');
			res.redirect('/manage/employees');
		});

	});


	router.get('/employees/edit/:id', function(req, res){
		Employee.findOne({_id:req.params.id}, function(err, employee){
				if(err){
					console.log(err);
				}
				var model = {
					employee: employee
				};
				res.render('manage/employees/edit', model);
		});
	});


	router.post('/employees/edit/:id', function(req, res){
		var ID = req.body.ID && req.body.ID.trim();
		var name = req.body.name && req.body.name.trim();
		var gender = req.body.gender && req.body.gender.trim();
		var department = req.body.department && req.body.department.trim();
		var age = req.body.age && req.body.age.trim();
		var designation = req.body.designation && req.body.designation.trim();
		var location = req.body.location && req.body.location.trim();

		Employee.update({_id:req.params.id}, {
			ID: ID,
			name: name,
			gender: gender,
			department: department,
			age: age,
			designation: designation,
			location: location
		}, function(err){
			if(err){
				console.log('update error', err);
			}
			req.flash('success', "Employee Updated");
			res.location('/manage/employees');
			res.redirect('/manage/employees');
		});
	});



	router.post('/employees/delete/:id', function(req, res){
		Employee.remove({_id:req.params.id}, function(err){
			if(err){
				console.log(err);
			}
			req.flash('success', "Employee Deleted");
			res.location("/manage/employees");
			res.redirect("/manage/employees");
		});
	});

//////////////////



};


//////////////
