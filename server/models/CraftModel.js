const mongoose = require('mongoose');

const CraftSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    content: {
        type: String,
        required: true
    },
    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'response'
    }],

})

const Craft = mongoose.model('Craft', CraftSchema);

module.exports = Craft;