var mongoose = require('mongoose');
let crypto = require('crypto');
var Article = require('./Article');
let jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    
   name: String,
   username: { type: String, lowercase: true, 
    unique: true },
   hash: String,
    salt: String,
   picture: String,
   articles: [{type:Schema.ObjectId, ref:"Article"}],
    
});	

UserSchema.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(32).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 
	  10000, 64, 'sha512').toString('hex');
}
UserSchema.methods.validPassword = function (password) {
	let hash = crypto.pbkdf2Sync(password, this.salt, 
	  10000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};
UserSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000)
    },ARTICLE_BACKEND_SECRET);
  };

  
  module.exports = mongoose.model('User', UserSchema);