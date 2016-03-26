var mongoose=require('mongoose');
var crypto=require('crypto');
var jwt=require('jsonwebtoken');
var usersSchema=new mongoose.Schema({
    username:String,
    balance:Number,
    hash:String,
    Salt:String
});
usersSchema.methods.setPassword=function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};
usersSchema.methods.validPassword=function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return hash===this.hash;
};
usersSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
	_id: this._id,
	email: this.email,
	name: this.name,
	exp: parseInt(expiry.getTime() / 1000) 
    }, process.env.JWT_SECRET);
};
var transactionsSchema=new mongoose.Schema({
    amount:{type:Number, min:0},
    date:{type:Date, "default":Date.now},
    type:String,
    comment:String,
    madeBy:String,
    id:Number,
    balance:{type:Number, min:0}
});
var pendingTransactionsSchema=new mongoose.Schema({
    amount:{type:Number, min:0},
    date:{type:Date, "default":Date.now},
    type:String,
    comment:String,
    madeBy:String,
    id:Number,
    confirmedBy:[String]
}); 
var groupsSchema=new mongoose.Schema({
    users:[usersSchema],
    transactionHistory:[transactionsSchema],
    pendingTransactions:[pendingTransactionsSchema],
    commonBalance:Number 
});

mongoose.model('group',groupsSchema,'groups');
