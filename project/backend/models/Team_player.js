const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamPlayerSchema = new Schema({
    teamname: {
        type: String,
        required: [true, "Username can't be blank"],
        index: true
    },
    player1: {
        type: String,
        required: [true, "Username can't be blank"],
        index: true
    },
    player2: {
        type: String,
        required: [true, "Username can't be blank"],
        index: true
    },
    player3: {
        type: String,
        required: [true, "Username can't be blank"],
        index: true
    },
    player4: {
        type: String,
        required: [true, "Username can't be blank"],
        index: true
    },
    player5: {
        type: String,
        required: [true, "Username can't be blank"],
        index: true
    }
});

module.exports = mongoose.model('TeamPlayer', TeamPlayerSchema);
