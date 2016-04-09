var mongoose=require('mongoose');

var usersSchema=new mongoose.Schema({
    username:String,
    balance:{type:Number,"default":0}
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
    groupName:{type:String, unique:true},
    users:[usersSchema],
    transactionHistory:[transactionsSchema],
    pendingTransactions:[pendingTransactionsSchema],
    commonBalance:Number 
});

mongoose.model('group',groupsSchema,'groups');
