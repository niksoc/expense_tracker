module.exports=function loginCtrl(req, res, next) {
  res.render('login', { apptitle: 'Expense Tracker' }); 
}; 
