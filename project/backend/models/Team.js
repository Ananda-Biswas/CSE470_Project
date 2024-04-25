const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamSchema = new Schema({
    teamname: {
        type: String,
        required: [true],
        index: true
    },
    teamparse: {
        type: String,
        required: [true],
        index: true
    },
    numberplayers: {
        type: Number,
        required: [true],
        index: true
    },
    homestadium: {
        type: String,
        required: [true],
        index: true
    }
});

module.exports = mongoose.model('Team', TeamSchema);
