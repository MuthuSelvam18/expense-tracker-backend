const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    category: {
        desc: "User Email",
        type: String,
        required: true,
        unique: true
    },
}, { strict: true });

const Category = mongoose.model('Category', schema);

module.exports = Category;