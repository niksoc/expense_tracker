var express = require('express');
var router = express.Router();
var loginCtrl=require('../controllers/loginCtrl');
var mainCtrl=require('../controllers/mainCtrl');
var othersCtrl=require('../controllers/othersCtrl');
/* GET home page. */ 
router.get('/', loginCtrl); 
router.get('/main',mainCtrl);
router.get('/about',othersCtrl.aboutCtrl);
module.exports = router;
