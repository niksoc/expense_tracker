var mongoose=require('mongoose');

var usersSchema=new mongoose.Schema({
    username:String,
<<<<<<< HEAD
    balance:{type:Number,"default":0}
=======
    balance:Number
>>>>>>> c6441a52d699dcff1f06d2c7f20b250c69c086a2
});
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
<<<<<<< HEAD
    groupName:{type:String, unique:true},
=======
>>>>>>> c6441a52d699dcff1f06d2c7f20b250c69c086a2
    users:[usersSchema],
    transactionHistory:[transactionsSchema],
    pendingTransactions:[pendingTransactionsSchema],
    commonBalance:Number 
});

mongoose.model('group',groupsSchema,'groups');
