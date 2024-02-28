var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});
router.get('/new', function(req, res, next) {
  res.render('form')
});


app.post('/new', function(req, res) {
  const place = req.body;
  console.log(place.messageText)
  messages.push({text: place.messageText, user: place.messageUser, added: new Date()});
  res.redirect('/');
});
module.exports = router;