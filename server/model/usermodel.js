const mongoose = require("mongoose");
const UserSchema = require("../schema/userschema");


const user = mongoose.model("Users",UserSchema);

module.exports = user;