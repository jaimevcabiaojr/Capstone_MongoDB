const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cellphone:Number,
  email: String,
  brand: String,
  itemtype:String,
  issue:String,
  remarks:String,
  status1:String,
  
});

module.exports = mongoose.model("User", userSchema);
