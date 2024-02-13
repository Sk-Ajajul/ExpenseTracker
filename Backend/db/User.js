const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    conformpassword:String,
})

module.exports = mongoose.model("expense",userSchema);