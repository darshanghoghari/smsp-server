const { mongoose } = require('mongoose');
const houseModel = require('../models/house.model');
const userModel = require('../models/user.model');
const { HttpException } = require('../exceptions/HttpsException');

// const createError = require('http-errors');
/**
 * 
 * if user is admin , then add house detail...(implement  later Pending ....)
 * 
 */

const createHouseDetail = async (houseData) => {
    const houseDetailExist = await houseModel.findOne({ houseNo: houseData.houseNo });

    if (houseDetailExist) {
        throw HttpException(409, 'This House Detail already exists!')
    }
    else {
        const newHouseDetail = new houseModel(houseData);

        const collectionData = await newHouseDetail.save();

        return collectionData;
    }
}

const getAllHouseDetails = async () => {

    const collectionData = await houseModel.find().sort({ createdAt: -1 });

    return collectionData;
}

const updateHouseDetail = async (houseId, houseData) => {
    const houseDetailId = new mongoose.Types.ObjectId(houseId);
    const updatedCollectionData = await houseModel.findOneAndUpdate({ _id: houseDetailId }, { ...houseData }, { new: true }).lean();
    if (!updatedCollectionData) {
        throw HttpException(409, 'House Detail Not Updated');
    }
    else {
        return updatedCollectionData;
    }
}

const deleteHouseDetail = async (houseId) => {
    const houseDetailId = new mongoose.Types.ObjectId(houseId);
    const deletedCollectionData = await houseModel.deleteOne({ _id: houseDetailId }, { new: true }).lean();
    if (!deletedCollectionData) {
        throw HttpException(409, 'House Detail Not Deleted');
    } else {
        return deletedCollectionData;
    }
}
module.exports = { createHouseDetail, getAllHouseDetails, updateHouseDetail, deleteHouseDetail }