const CraftModel = require('../models/CraftModel');

exports.getAllCrafts = async (req, res) => {
    try {
        const crafts = await CraftModel.find({})
        res.status(200).json({ message: "Sent all Tweets", crafts});
    } catch (error) {
        res.status(500).json({ message: "unalbe to get crafts controller error"})
    }
};

exports.addCraft = async (req, res) => {
    try {
        const { userId, content } = req.body;

        const newCraft = new CraftModel({
            userId: userId,
            content: content
        });

        newCraft.save()

        res.status(200).json({ message: "craft posted successfully", craft: newCraft});

    } catch (error) {
        res.status(500).json({ message: "internal server error, controller error", error })
    }
}