const complainModel = require('../models/complain.model')

const createComplain = async (complainData, userData) => {
    complainData.complainedBy = userData._id;
    const newComplainDetail = new complainModel(complainData);

    const collectionData = await newComplainDetail.save();

    return collectionData;
}

const getAllComplainDetails = async () => {
    const collectionData = await complainModel.find().sort({ createdAt: -1 });

    return collectionData;
}
module.exports = { createComplain, getAllComplainDetails }