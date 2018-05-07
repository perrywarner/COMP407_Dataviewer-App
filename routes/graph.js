var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/graph', function(req, res, next) {
  res.render('graph', { title: 'Sample-Graph' });
});

module.exports = router;
