var mongoose = require('mongoose');
var Article = require('./Article');

var UserSchema = new mongoose.Schema({
    
   name: String,
   password: String,
   picture: String,
   articles: [Article],
    
});	
mongoose.model('User', UserSchema);