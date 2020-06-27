var express = require('express');
var router = express.Router();

/* GET hoge listing. */
router.get('/:name', (req, res, next) => {
    let data = req.params;
    console.log(data.name);
    res.json({
      name: data.name
    })
  });
  
module.exports = router;
