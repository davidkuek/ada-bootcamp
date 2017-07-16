var express = require('express');
var router = express.Router();
var Books = require('./books.js');

router.get('/',function(req,res){
	res.json({message:'Welcome to our api!'});
});

router.route('/books').post(function(req,res){

	if(!req.body.title ||
	!req.body.author ||
	!req.body.year.toString().match(/^[0-9]{4}$/g) ||
	!req.body.pages.toString().match(/^[0-9]{1,}$/g)){
	res.status(400);
	res.json({message: "Bad Request"});

}else{

	var books = new Books();
	books.title = req.body.title;
	books.author = req.body.author;
	books.year = req.body.year;
	books.pages = req.body.pages;

	books.save(function(err){
		if(err) res.send(err);
		res.json({message: 'Book created!'});
	});
}
});

router.route('/books').get(function(req,res){
	Books.find(function(err,books){
		if(err)
			res.send(err);

		res.json(books);
	});
});

router.route('/books/:id').get(function(req,res){
	Books.findById(req.params.id,function(err,books){
		if(err)
			res.send(err);
		res.json(books);
	});
});

router.route('/books/:id').put(function(req,res){
		if(!req.body.title ||
	!req.body.author ||
	!req.body.year.toString().match(/^[0-9]\.[0-9]{4}$/g) ||
	!req.params.pages.toString().match(/^[0-9]$/g)){
	res.status(400);
	res.json({message: "Bad Request"});

}else{
	Books.findById(req.params.id,function(err,books){
		if(err)
			res.send(err);
		books.title = req.body.title;
		books.author = req.body.author;
		books.year = req.body.year;
		books.pages = req.body.pages;

		books.save(function(err){
			if(err)
			res.send(err);

		res.json({message: 'Book updated!'});

		});
	});
};
});

router.route('/books/:id').delete(function(req,res){
	if(!req.body.title ||
	!req.body.author ||
	!req.body.year.toString().match(/^[0-9]\.[0-9]{4}$/g) ||
	!req.params.pages.toString().match(/^[0-9]$/g)){
	res.status(400);
	res.json({message: "Bad Request"});

}else{
	
	Books.remove({
		_id:req.params.id
	},function(err,books){
		if (err)
			res.send(err);

		res.json({message:'Books sucessfully deleted!'});
	}
)
};
});
module.exports = router;

