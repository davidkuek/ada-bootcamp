var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BooksSchema = new Schema({
	title: String,
	author: String,
	year: Number,
	pages: Number
});

module.exports = mongoose.model('Books',BooksSchema);