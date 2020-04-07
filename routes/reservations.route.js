const express = require('express');
const router = express.Router();
const { getReservations, addReservation, deleteReservation } = require('../controllers/reservations.controller');
const { authenticatedRequired } = require('./auth');

router
  .route('/')
  .get(authenticatedRequired, getReservations)
  .post(authenticatedRequired, addReservation);

router
  .route('/:id')
  .delete(authenticatedRequired, deleteReservation);

module.exports = router;