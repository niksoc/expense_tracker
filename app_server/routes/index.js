var express = require('express');
var router = express.Router();
var loginCtrl=require('../controllers/loginCtrl');
var mainCtrl=require('../controllers/mainCtrl');
var othersCtrl=require('../controllers/othersCtrl');
<<<<<<< HEAD
var authCtrl=require('../controllers/authCtrl');
router.get('/', loginCtrl); 
router.get('/main',mainCtrl);
router.get('/about',othersCtrl.aboutCtrl);
router.post('/register',authCtrl.register);
router.post('/login',authCtrl.login);
=======
/* GET home page. */ 
router.get('/', loginCtrl); 
router.get('/main',mainCtrl);
router.get('/about',othersCtrl.aboutCtrl);
>>>>>>> c6441a52d699dcff1f06d2c7f20b250c69c086a2
module.exports = router;
