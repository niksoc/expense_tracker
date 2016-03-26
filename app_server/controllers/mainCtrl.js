var transactions=[{ 
    "amount":300,
    "date":"22/03/16",
    "type":"withdrawal",
    "comment":"big basket purchase for self",
    "madeBy":"Abhinaba",
    "id":4, 
    "balance":900
},{ 
    "amount":700,
    "date":"22/03/16",
    "type":"withdrawal",
    "comment":"big basket purchase for self",
    "madeBy":"Nikhil",
    "id":3, 
    "balance":1200
},{
    "amount":900,
    "date":"22/03/16",
    "type":"deposit",
    "comment":"common deposit",
    "madeBy":"Ayantan",
    "id":2, 
    "balance":1900
},{
    "amount":1000,
    "date":"22/03/16",
    "type":"deposit",
    "comment":"common deposit",
    "madeBy":"Himanshu",
    "id":1, 
    "balance":1000
}]; 
var group={users:[{ 
    "username":"Nikhil",
    "balance":700 
},{
    "username":"Himanshu",
    "balance":-100
},{ 
    "username":"Ayantan",
    "balance":200
},{ 
    "username":"Navanshu",
    "balance":1000
},{ 
    "username":"Abhinaba",
    "balance":300
}],commonBalance:900
	  };
var pendingTransactions=[{
    "id":2,
    "amount":200,
    "date":"23/03/16",
    "type":"deposit",
    "comment":"common deposit",
    "madeBy":"Ayantan",
    "confirmedBy":["Nikhil"]
},{
    "id":1,
    "amount":100,
    "date":"22/03/16",
    "type":"withdrawal",
    "comment":"common deposit",
    "madeBy":"Himanshu",
    "confirmedBy":[]
}];
group.commonWealth=group.users.reduce((a,b)=>a+b.balance,group.commonBalance);
var currentUser=group.users[0];
module.exports=function mainCtrl(req, res, next) {
    res.render('main', { apptitle: 'Expense Tracker',currentUser,transactions,group,pendingTransactions}); 
}; 










