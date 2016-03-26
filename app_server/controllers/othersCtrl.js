var aboutText=["Expense tracker is a web application to track the daily expenses of a group of people when they share a common pool of money, called the 'common', it includes features like majority confirmation of transactions, a transaction history and notification of dues.It can be used by families and flatmates", "This application was written in Javascript on the nodejs platform","- Nikhil Satish"]; 
module.exports.aboutCtrl=function(req, res, next){
    res.render('others',{apptitle:"Expense Tracker", pagetitle:"About", paras:aboutText});
};
