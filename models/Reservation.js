const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add text']
    },
    date: {
        type: Date,
        trim: true,
        required: [true, 'Please add date']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);