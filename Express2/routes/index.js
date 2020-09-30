var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/matias', function(req, res, next) {
  res.render('User', {person: 'Matias', title: 'Express'})
});

module.exports = router;
