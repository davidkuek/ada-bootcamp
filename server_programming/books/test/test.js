var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../server.js');

chai.use(chaiHttp);
describe('/GET book',function(){
	it('it should GET all the books',function(done){
		chai.request(server)
		.get('/api/books')
		.end(function(err,res){
			res.should.have.status(200);
			res.body.should.be.a('array');
			//res.body.length.should.be.eq1(0);
			done();
		});
	});
});

chai.use(chaiHttp);
describe('/POST book',function(){
	it('it should POST all the books',function(done){

	var books = {"title": "Programming basics", "author": "Author V", "year": 2017, "pages": 500};

		chai.request(server)
		.post('/api/books')
		.send(books)
		.end(function(err,res){
			res.should.have.status(200);
			res.body.should.be.a('object');
			res.body.should.have.property("title");	
			done();
		});
	});
});