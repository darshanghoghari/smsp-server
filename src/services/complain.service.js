const { default: mongoose } = require('mongoose');
const complainModel = require('../models/complain.model');
const { HttpException } = require('../exceptions/HttpsException');

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

const updateComplainDetail = async (complainId, complainData) => {
    const updatedCollection = await complainModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(complainId) }, { ...complainData }, { new: true });

    if (!updatedCollection) throw HttpException(409, "Complain Data Not Updated");

    return updatedCollection;

}

const deleteComplainDetail = async (complainId) => {
    const deletedCollectionData = await complainModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(complainId) }, { new: true });

    if (!deletedCollectionData) throw HttpException(409, "Complain Not Deleted");

    return deletedCollectionData;
}

module.exports = { createComplain, getAllComplainDetails, updateComplainDetail, deleteComplainDetail };