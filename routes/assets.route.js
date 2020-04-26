const express = require('express');
const router = express.Router();
const { getAsset, getAssets, addAsset, deleteAsset } = require('../controllers/asset.controller');
const { authenticatedRequired } = require('./auth');

router
    .route('/')
    .get(authenticatedRequired, getAssets)
    .post(authenticatedRequired, addAsset);

    // delete

router
    .route('/:id')
    .get(authenticatedRequired, getAsset)
    .delete(authenticatedRequired, deleteAsset);

module.exports = router;
