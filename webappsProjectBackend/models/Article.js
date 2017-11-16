var mongoose = require('mongoose');
var User = require('./User');
var Comment = require('./Comment');
var Schema = mongoose.Schema;
var ArticleSchema = new mongoose.Schema({
    name: String,
    date: Date,
    title: String,
    text: String,
    picture: String,
    likes: Number,
    comments: [{type:Schema.ObjectId, ref:"Comment"}],
});	
module.exports = mongoose.model('Article', ArticleSchema);