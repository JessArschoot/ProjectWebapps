var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Article = mongoose.model('Article');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');

//process.env.ARTICLE_BACKEND_SECRET
let jwt = require('express-jwt');
let auth = jwt({secret:process.env.ARTICLE_BACKEND_SECRET, userProperty: 'payload'});
/* GET home page. */
router.get('/articles', function(req, res, next) {
  Article.find({}).populate('user').exec( function(err, articles){
    if (err) { return next(err); }
    res.json(articles);
  })
});

router.get('/article/:id', auth, function(req, res, next) {
  var populateQuery = [{path:"comments", model:"Comment", populate: {path: "user", model:"User"}}];   
  Article.findOne({
    _id: req.params.id,
  }).populate(populateQuery).populate('user').exec( function(err, article){
    if (err) { return next(err); }
    res.json(article);
  })
});

router.post('/article/add-like/:id',auth, function(req, res, next){
  console.log(req.body);
  Article.findOne({
    _id:req.params.id
  }).populate('User').exec( function(err, article){
    if(err) {return next(err);}
    article.likes.push(req.body.username);
    article.save(function(err){
      if(err){return next(err);}
      res.json(article);
    });
  });
});

router.post('/article/remove-like/:id', auth, function(req,res,next){
  Article.findOne({
    _id:req.params.id
  }, function(err, article){
    if(err){return next(err);}
    article.likes.forEach(function(item, index, object) {
      if(item == req.body.username){
        object.splice(index, 1);
      }
    });
    article.save(function(err){
      if(err){return next(err);}
      res.json(article);
    });
  });
});
router.post('/article/add-article', auth, function(req, res, next){
  console.log(req.body.nation);
  User.findOne({
    username: req.body.username,
  }, function(err, user){
    if(err) {
      console.log(err.message);
      return next(err);}

    if(!user) {
      console.log("Geen user");
    }
    var newArticle = new Article({
      user: user,
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
  })
  
  
  });
router.post('/article/remove-comment/:id', auth, function(req, res, next){
  Comment.find({
      _id: req.params.id
  }).remove().exec(function(err, comment){
    if(err){console.log(err.message);return next(err);}
    Article.findOne({
      _id:req.body.id
    }, function(err, article){
      if(err){return next(err);}
      article.comments.forEach(function(item, index, object) {
        if(item == req.params.id){
          object.splice(index, 1);
        }
      });
      article.save(function(err){
        if(err){return next(err);}
        res.json(article);
      });
    });
  })
})

router.post('/article/add-comment/:id', auth, function(req, res, next){
  console.log(req.params.id);
  console.log(req.body.user.username);
  User.findOne({
    username: req.body.user.username,
  }, function(err, user){
    if(err) {
      console.log(err.message);
      return next(err);}

    if(!user) {
      console.log("Geen user");
    }

  var newComment = new Comment({
    date: req.body.date,
    text: req.body.text,
    user: user,

  })

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
        //console.log(err.message);
        handleError(res, err.message, "mislukt"); 
      }
    });

    article.save(function(err){
      if (err){ 
        console.log(err.message);
        handleError(res, err.message, "mislukt"); }
    })

    res.json(article);
  });
});
});

module.exports = router;
