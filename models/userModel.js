const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  email : String,
  cssTaskPointer: {
    type: Number,
    default: 1
  },
  htmlTaskPointer: {
    type: Number,
    default: 1
  },
  jsTaskPointer: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("User", user);