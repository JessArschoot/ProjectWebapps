var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let User = mongoose.model('User');

let jwt = require('express-jwt');
let auth = jwt({secret: process.env.ARTICLE_BACKEND_SECRET, userProperty: 'payload'});


router.post('/register', function(req, res, next){
  console.log(req.body);
  if(!req.body.username || !req.body.password || !req.body.name){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  
  
  var user = new User();
  user.username =req.body.username;
  user.name = req.body.name;
  user.picture = req.body.picture;
  
  console.log(user);
  user.setPassword(req.body.password);
  
  user.save(function (err){
    if(err){ return next(err); }
    return res.json({token: user.generateJWT()})
  });
});

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }
    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/checkusername', function(req, res, next) {
  // if (req.body.username) {
    User.find({username: req.body.username}, function(err, result) {
      if (result.length) {
        res.json({'username': 'alreadyexists'})
      } else {
        res.json({'username': 'ok'})
      }
    });
  // }
});

router.get('/user/:name', function(req, res, next){
  console.log(req.params.name);
  User.findOne({
    username: req.params.name
  }, function(err, result){
    if(err) { console.log(err.message)}
    if(!result){ console.log('geen user')}
    res.json(result);
   
  })
});

module.exports = router;