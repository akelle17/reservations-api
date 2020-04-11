const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add name']
    },
    type: {
        type: String,
        trim: true,
        required: [true, 'Please add type']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Asset', AssetSchema);