var mongoose = require('mongoose');
var User = require('./User');

var ArticleSchema = new mongoose.Schema({
    name: String,
    date: Date,
    title: String,
    text: String,
    picture: String,
    likes: Number,
    comments: [String],
});	
mongoose.model('Article', ArticleSchema);