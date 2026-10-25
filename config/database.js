const mongoose = require('mongoose');

function connectDatabase() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/practicekaro';

  return mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
}

module.exports = connectDatabase;
