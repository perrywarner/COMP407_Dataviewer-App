var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/temperature', function(req, res){
  res.render('temperature', { title: 'Temperature in Fahrenheit'});
});

router.get('/rpidata', function(req, res){
  res.render('rpidata', { title: 'Example Data'});
});

router.get('/dynamic_graph_ex_AJAX', function(req, res){
  res.render('dynamic_graph_ex_AJAX', { title: 'Example dynamic graph'});
});

module.exports = router;
