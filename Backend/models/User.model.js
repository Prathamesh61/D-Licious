const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_id : {type : Number},
    name : {type : String},
    email : {type : String, required : true},
    password : {type : String, required : true},
    mobile : {type : String, required : true},
    gander : {type : String },
    marital : {type : String },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };