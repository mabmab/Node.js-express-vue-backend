var express = require('express');
const { execSync } = require('child_process');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const temp = execSync('vcgencmd measure_temp | sed -e "s/temp=//" | sed -z "s/\'C\\n//"');
  console.log(temp.toString());
  res.json({
    temperature: temp.toString()
  })
});

module.exports = router;
