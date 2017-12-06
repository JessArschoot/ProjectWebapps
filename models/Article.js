var mongoose = require('mongoose');
var User = require('./User');
var Comment = require('./Comment');
var Schema = mongoose.Schema;
var ArticleSchema = new mongoose.Schema({
    user: {type:Schema.ObjectId, ref:"User"},
    nation: String,
    date: Date,
    title: String,
    text: String,
    picture: String,
    likes: [String],
    comments: [{type:Schema.ObjectId, ref:"Comment"}],
});	
module.exports = mongoose.model('Article', ArticleSchema);