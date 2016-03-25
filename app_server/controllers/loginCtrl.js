//login
module.exports=function loginCtrl(req, res, next) {
  res.render('login', { title: 'Expense Tracker' }); 
};
