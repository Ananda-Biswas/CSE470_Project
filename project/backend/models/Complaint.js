const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComplaintSchema = new Schema({
    name: {
        type: String,
        required: [true],
        index: true
    },
    complaint: {
        type: String,
        required: [true],
        index: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
