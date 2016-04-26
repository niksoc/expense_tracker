var mongoose=require('mongoose');
var crypto=require('crypto');
var jwt=require('jsonwebtoken');
var useridsSchema=new mongoose.Schema({
    username:{type:String, unique:true}, 
    hash:String,
    salt:String
});
useridsSchema.methods.setpassword=function(password){
    this.salt = crypto.randombytes(16).tostring('hex');
    this.hash = crypto.pbkdf2sync(password, this.salt, 1000, 64).tostring('hex');
};
useridsSchema.methods.validpassword=function(password){
    var hash = crypto.pbkdf2sync(password, this.salt, 1000, 64).tostring('hex');
    return hash===this.hash;
};
useridsSchema.methods.generatejwt = function() {
    var expiry = new date();
    expiry.setdate(expiry.getdate() + 7);
    return jwt.sign({
	_id: this._id,
	username: this.username,
	exp: parseint(expiry.gettime() / 1000) 
    }, process.env.jwt_secret);
};

mongoose.model('userid',useridsSchema,'userids');

