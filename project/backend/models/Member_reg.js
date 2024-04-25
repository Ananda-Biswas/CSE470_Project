const mongoose = require('mongoose');
const { Schema } = mongoose;

const MemberSchema = new Schema({
    name: {
        type: String,
        required: [true],
        index: true
    },
    age: {
        type: Number,
        required: [true],
        index: true
    },
    gender: {
        type: String,
        required: [true],
        index: true
    },
    support: {
        type: String,
        required: [true],
        index: true
    },
    favourite: {
        type: String,
        required: [true],
        index: true
    }
});

module.exports = mongoose.model('Member', MemberSchema);
