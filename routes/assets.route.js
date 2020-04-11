const express = require('express');
const router = express.Router();
const { getAssets, addAsset } = require('../controllers/asset.controller');
const { authenticatedRequired } = require('./auth');

router
    .route('/')
    .get(authenticatedRequired, getAssets)
    .post(authenticatedRequired, addAsset);

    // delete

module.exports = router;
