const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: [true, "Username can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'Username is invalid'],
        index: true
    },
    email: {
        type: String,
        required: [true, "Email can't be blank"]
    },
    location: {
        type: String,
        lowercase: true,
        required: [true, "Location can't be blank"],
        match: [/^\S+$/, 'Location is invalid'], // Changed regex
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

module.exports = mongoose.model('User', UserSchema);
