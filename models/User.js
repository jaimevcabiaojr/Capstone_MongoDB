const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
    
  
  cellphone:Number,
  email: String,
  password: String,
  brand: String,
  itemtype:String,
  issue:String,
  remarks:String,
  status1:String,
  
});

module.exports = mongoose.model("User", userSchema);
