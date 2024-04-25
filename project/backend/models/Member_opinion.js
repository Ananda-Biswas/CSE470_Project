const mongoose = require('mongoose');
const { Schema } = mongoose;

const OpinionSchema = new Schema({
    name: {
        type: String,
        required: [true],
        index: true
    },
    opinion: {
        type: String,
        required: [true],
        index: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Opinion', OpinionSchema);
