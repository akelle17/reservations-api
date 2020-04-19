const { assetLogger } = require('../utils/logger');
const Asset = require('../models/Asset');

exports.getAssets = async (req, res, next) => {
    assetLogger.info('>>>> GET Assets');


    try {
        const assets = await Asset.find();
        
        assetLogger.info('<<<< GET Assets');
        
        return res.status(200).json({
            success: true,
            count: assets.length,
            data: assets
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err
        });
    }
}

exports.addAsset = async (req, res, next) => {
    try {   
        const { name, type } = req.body;

        assetLogger.debug('>>>> Entering add asset request', {
          body: req.body
        });

        const asset = await Asset.create(req.body);
    
        assetLogger.debug('Add asset success');

        return res.status(201).json({
            success: true,
            data: asset
        });   
    } catch (err) {
        if (err.name === 'ValidationError') {
          const messages = Object.values(err.errors).map(val => val.message);
          
          assetLogger.error('Add asset validation error', {
            error: err,
            messages: messages
          });

          return res.status(400).json({
              success: false,
              error: messages
          });
        } else {
          assetLogger.error('Add asset error', {
            error: err
          });

          return res.status(500).json({
              success: false,
              error: err
          });
        }
    }
}