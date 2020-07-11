var express = require('express');
const { execSync } = require('child_process');

var router = express.Router();

/* GET hoge listing. */
router.get('/:name', (req, res, next) => {
    let data = req.params;
    console.log(`name: ${data.name}`);
    if (data.name === 'temp') {
      const temp = execSync('vcgencmd measure_temp | sed -e "s/temp=//" | sed -z "s/\'C\\n//"');
      console.log(`response: ${temp.toString()}`);
      res.json({
        result: temp.toString()
      })
    }
    else if (data.name === 'pressure')
    {
      const pressure = execSync('python ./public/pythonscripts/MPL3115A2.py | sed -z "s/hPa\\n//"');
      console.log(`response: ${pressure.toString()}`);
      res.json({
        result: pressure.toString()
      })
    }
    else {
      console.log(`response: ${data.name}`);
      res.json({
        result: data.name
      })
    }
  });
  
module.exports = router;
