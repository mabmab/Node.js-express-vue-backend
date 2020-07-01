var express = require('express');
const { execSync } = require('child_process');

var router = express.Router();

/* GET Date Time Now */
const dt = execSync('date');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', started_time: dt });
});

module.exports = router;
