var passport = require('passport');
var mongoose = require('mongoose');
var userid = mongoose.model('userid');
var group= mongoose.model('group'); 

module.exports.register = function(req, res) {
    if(!req.body.name || !req.body.groupname || !req.body.password) {
	sendJSONresponse(res, 400, {
	    "message": "Please fill in all the fields"
	});
	return;
    }
    var userid = new userid();
    userid.username = req.body.groupname+req.body.name;
    userid.setPassword(req.body.password);
    userid.save(function(err) {
	var token;
	if (err) {
	    sendJSONresponse(res, 404, err);
	} else {
	    var group=new group();
	    group.groupname = req.body.groupname;
	    group.users=[{username:req.body.name}];
	    group.save(function(err){
		if (err) {
		    sendJSONresponse(res, 404, err);
		} 
		else{token = user.generateJwt();
		sendJSONresponse(res, 200, {
		    "token" : token
		});} 
	    });
	}
    });
};
		
module.exports.login = function(req, res) {
    if(!req.body.name || !req.body.groupname || !req.body.password){
	sendJSONresponse(res, 400, {
	    "message": "Please fill in all the fields"
	});
	return;
    }
    req.body.name=req.body.groupname+req.body.name;
    passport.authenticate('local', function(err, user, info){
	var token;
	if (err) {
	    sendJSONresponse(res, 404, err);
	    return;
	}
	if(user){
	    token = user.generateJwt();
	    sendJSONresponse(res, 200, {
		"token" : token
	    });
	} else {
	    sendJSONresponse(res, 401, info);
	}
    })(req, res);
};    

