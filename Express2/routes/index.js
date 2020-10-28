var express = require('express');
var router = express.Router();
// hent mongo modulet fra docker.
var mongo = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/matias', function(req, res, next) {
  console.log("hej")
  // create database
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://root:example@db:8001/mydb?authSource=admin";
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
  });
  res.render('User', {person: 'Matias', title: 'Express'})
});

module.exports = router;
