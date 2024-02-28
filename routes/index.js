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
  res.render('index', { title: "Mini Message Board", messages: messages })
});

router.get('/new', function(req, res, next) {
  res.render('form')
});

router.post('/new', function(req, res, next) {
  const place = req.body.messageText;
  const exist = req.body.messageUser;
  messages.push({text: place, user: exist, added: new Date()});
  res.redirect('/');
});

module.exports = router;
