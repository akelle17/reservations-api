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