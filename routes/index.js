var express = require('express');
var router = express.Router();

const date = new Date();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: date.toDateString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: date.toDateString()
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
  const date = new Date();
  messages.push({text: place, user: exist, added: date.toDateString()});
  res.redirect('/');
});

module.exports = router;
