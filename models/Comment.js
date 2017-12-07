var mongoose = require('mongoose');
var User = require('./User');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
    date: Date,
    text: String,
    user: {type:Schema.ObjectId, ref:"User"},
});	

module.exports = mongoose.model('Comment', CommentSchema);