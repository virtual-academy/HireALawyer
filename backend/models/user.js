const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true, "Full name is required"],
        // unique:[true,"this name is already in use"],
        default:"Unknown User",
        // minlength:[4,"Full name must be of 4 or more characters."],
        // select:false,
    },
    email:{
        type:String,
        required:[true,"Email is Required"]
    },
    password:{
        type:String,
        required:[true,"Email is Required"],
        minlength:[8,"Pasword must be of 8 or more characters."],
        select:false,
    },
    city:{
        type:String,
        default:'Kasur'
    },

});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;