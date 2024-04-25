const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlayerRegSchema = new Schema({
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
    country: {
        type: String,
        required: [true],
        index: true
    },
    height: {
        type: String,
        required: [true],
        index: true
    },
    blood_group: {
        type: String,
        required: [true],
        index: true
    },
    debut: {
        type: String,
        required: [true],
        index: true
    },
    price: {
        type: String,
        required: [true],
        index: true
    },
    position: {
        type: String,
        required: [true],
        index: true
    }
});

module.exports = mongoose.model('PlayerReg', PlayerRegSchema);
