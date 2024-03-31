const mongoose = require("mongoose");


// mongodb schema 
const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  }, {timestamps : true});


//mongo db model
const User = mongoose.model('user', userSchema);

module.exports = User;