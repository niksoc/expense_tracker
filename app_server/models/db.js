var mongoose=require('mongoose');
var dbURI = 'mongodb://localhost/expense-tracker';
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  dbURI = process.env.OPENSHIFT_MONGODB_DB_URL + "expense-tracker";
}
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
console.log('Mongoose disconnected');
});
function gracefulShutdown(msg,callback){
    mongoose.connection.close(()=>{
	console.log("mongoose connection closed on " + msg);callback();
    });
} 
process.once('SIGUSR2', ()=>gracefulShutdown("nodemon restart", ()=>process.kill(process.pid,'SIGUSR2')));
process.on('SIGINT', ()=>gracefulShutdown("app termination", ()=>process.exit(0)));
process.on('SIGTERM', ()=>gracefulShutdown("Heroku app shutdown", ()=>process.exit(0)));

require('./groups');
require('./userid');


