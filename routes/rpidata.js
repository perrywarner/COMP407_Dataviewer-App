var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rpidata', function(req, res, next) {
  res.render('rpidata', { title: 'Sample-Data' });
});

module.exports = router;