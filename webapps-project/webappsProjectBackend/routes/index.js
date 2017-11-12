var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Article = mongoose.model('Article');

/* GET home page. */
router.get('/articles', function(req, res, next) {
  Article.find({}, function(err, article){
    if (err) { return next(err); }
    res.json(article);
  })
});

router.post('/articles/add', function(req, res, next){
  var names = ["Jess Arschoot", "Arne Deman", "Jess Maelfeyt", "Jonas Ooghe", "Matz Arschoot"];
  var titles = ["Veel liefde voor mijn moksje", "Fuck school", "SKE champion!", "Jana", "Sint Maarten vandaag"];
  var text = ["love Arne Deman", "Veel te veel werk voor school!", "Alweer gewonnen, 5 punten los!", "Kzie ze wel zitten", "Een robot gekregen van me broer!"];
  var likes = [345, 543, 1, 43, 432];
  for(var i = 0; i<names.length; i++){

    newArticle = new Article({
    name: names[i],
    title: titles[i],
    date: new Date(),
    text: text[i],
    likes: likes[i],
  });
  newArticle.save(function(err, rec) {
    if (err){ return next(err); }
    
  });
 
}
res.json(newArticle);
});
module.exports = router;
