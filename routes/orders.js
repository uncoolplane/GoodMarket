var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/orders', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
