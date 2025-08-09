const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    email:{
        desc: "User Email",
        type: String,
        required: true,
        unique: true
    },
    username:{
        desc: "User Name",
        type: String,
        required: true 
    },
    password:{
        desc: "Password",
        type: String,
        required: true  
    }
});

const User = mongoose.model('User', schema);

module.exports = User;