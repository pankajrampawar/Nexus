const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    messages: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Craft"
    }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;