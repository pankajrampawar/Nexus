const CraftModel = require('../models/CraftModel');

exports.getAllCrafts = async (req, res) => {
    try {
        const crafts = await CraftModel.find({})
        res.status(200).json({ message: "Sent all Tweets", crafts});
    } catch (error) {
        res.status(500).json({ message: "unalbe to get crafts controller error"})
    }
};