 var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function (req, res) {
  burger.insertOne(['burger_name'], [req.body.burger_name], function () {
    res.redirect('/burgers');
  });
});

router.put('/burgers/update/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.updateOne({ devoured: req.body.devoured }, condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;