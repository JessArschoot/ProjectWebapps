var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Article = mongoose.model('Article');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');


let jwt = require('express-jwt');
let auth = jwt({secret:process.env.ARTICLE_BACKEND_SECRET, userProperty: 'payload'});
/* GET home page. */
router.get('/articles', function(req, res, next) {
  Article.find({}).populate('user').exec( function(err, article){
    if (err) { return next(err); }
    res.json(article);
  })
});

router.get('/article/:id', auth, function(req, res, next) {
  Article.findOne({
    _id: req.params.id,
  }).populate('comments').exec( function(err, article){
    if (err) { return next(err); }
    res.json(article);
  })
});
router.post('/article/add-article', auth, function(req, res, next){
  console.log(req.body.date);

  var newArticle = new Article({
    username: req.body.username,
    userpic: req.body.userpic,
    nation: req.body.nation,
    date: req.body.date,
    title: req.body.title,
    text: req.body.text,
    picture: req.body.picture,
    likes: req.body.likes,
  })
  newArticle.save(function(err) {
    if (err){ 
      console.log(err.message);
      handleError(res, err.message, "mislukt");}
      res.json(newArticle);
  })
  
  });

router.post('/article/add-comment/:id', auth, function(req, res, next){
  console.log(req.params.id);
  console.log(req.body);

  var newComment = new Comment({
    date: req.body.date,
    text: req.body.text,
    username: req.body.name,
    userpic: req.body.userpic,
  })

  console.log(newComment);

  Article.findOne({
    _id: req.params.id,
  }, function(err, article){
    if(err) {
      console.log(err.message);
      return next(err);}

    if(!article) {
      console.log("Geen artikel");
    }
    article.comments.push(newComment);

    newComment.save(function(err) {
      if (err){ 
        console.log(err.message);
        handleError(res, err.message, "mislukt"); }
    });

    article.save(function(err){
      if (err){ 
        console.log(err.message);
        handleError(res, err.message, "mislukt"); }
    })
    res.json(article);
  });
});

module.exports = router;
