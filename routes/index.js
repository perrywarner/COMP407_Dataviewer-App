var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/graph', function(req, res){
  res.render('graph', { title: 'Graph'});
});

router.get('/rpidata', function(req, res){
  res.render('rpidata', { title: 'Example Data'});
});

module.exports = router;
