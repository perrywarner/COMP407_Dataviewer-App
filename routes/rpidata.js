/* This is an example of breaking the routes up to individual files. 
   It is considered best practice to break the routes up, but I'm not doing that right now.
   Currently, this rpidata.js file doesn't do anything, because I have the rpidataRouter commented
   out inside app.js.*/

var express = require('express');
var router = express.Router();

router.get('/rpidata', function(req, res, next) {
  res.render('rpidata', { title: 'Sample-Data' });
});

module.exports = router;