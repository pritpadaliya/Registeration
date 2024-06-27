const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    city: String
});

const UserModel = mongoose.model("register", UserSchema);
module.exports = UserModel;
