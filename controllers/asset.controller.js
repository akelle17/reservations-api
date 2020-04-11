const Asset = require('../models/Asset');

exports.getAssets = async (req, res, next) => {
    const assets = await Asset.find();

    try {
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

        const asset = await Asset.create(req.body);
    
        return res.status(201).json({
            success: true,
            data: asset
        });   
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err
        });
    }
}