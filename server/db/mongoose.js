var mongoose = require('mongoose');

mongoose.Promise =  global.Promise;
mongoose.connect( 'mongodb://samkit:28618302@ds113169.mlab.com:13169/todonode'
     || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};