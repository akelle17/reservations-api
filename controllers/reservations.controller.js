
const Reservation = require('../models/Reservation');


// @desc        Get all reservations
// @route       GET /api/v1/reservations
// @access      public
exports.getReservations = async (req, res, next) => {
    const reservations = await Reservation.find();
    try {
        
        return res.status(200).json({
            success: true,
            count: reservations.length,
            data: reservations
        })
    } catch (err) {
        res.send(500).json({
            success: false,
            error: err
        });
    }
}

// @desc        Add a reservation
// @route       POST /api/v1/reservations
// @access      public
exports.addReservation = async (req, res, next) => {
    res.send('POST Reservation');
    const { text } = req.body;

    const reservation = await Reservation.create()
}

// @desc        Delete a reservation
// @route       DELETE /api/v1/reservations/:id
// @access      public
exports.deleteReservation = async (req, res, next) => {
    res.send('DELETE Reservations');
}