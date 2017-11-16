var mongoose = require('mongoose');
var User = require('./User');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
    date: Date,
    text: String,
    username: String,    
});	

module.exports = mongoose.model('Comment', CommentSchema);