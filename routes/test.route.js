const express = require('express');
const router = express.Router();
const { authenticatedRequired } = require('./auth');

router
  .route('/')
  .get((req, res) => {
    res.json({
        message: 'Success!'
    });
});

router
  .get('/secure', authenticatedRequired, (req, res) => {
    res.json(req.jwt);
});

module.exports = router;