const { json } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
  res.render('User', {person: 'Matias', title: 'Express'})
});

module.exports = router;