var express = require('express');
var router = express.Router();
var ts = require('../controllers/timestamp.js');

/* GET home page. */
router.get('/', ts.homePage);
router.get('/:time', ts.timeStamp);

module.exports = router;
