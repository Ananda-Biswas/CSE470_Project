const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: [true, "Username can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'Username is invalid'],
        index: true
    },
    password: {
        type: Number,
        required: [true, "Password can't be blank"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Admin', AdminSchema);
