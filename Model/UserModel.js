const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//create the collection in database
const User = mongoose.model("User", UserSchema);
module.exports = User;
