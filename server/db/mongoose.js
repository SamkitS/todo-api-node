var mongoose = require('mongoose');

mongoose.Promise =  global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://samkit:28618302@ds113169.mlab.com:13169/todonode'
  };

  mongoose.connect( process.env.PORT ? db.mlab : db.localhost);
  
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

// 
