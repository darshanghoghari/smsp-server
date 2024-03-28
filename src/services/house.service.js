const { mongoose } = require('mongoose');
const houseModel = require('../models/house.model');
const userModel = require('../models/user.model');
const { HttpException } = require('../exceptions/HttpsException');


const createHouseDetail = async (houseData, userData) => {

    const isAdmin = await userModel.findOne({ _id: userData._id });
    if (isAdmin.userType !== "Admin") throw HttpException(409, 'Unauthorized to Add HouseDetails')

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

const updateHouseDetail = async (houseId, houseData, userData) => {

    const isAdmin = await userModel.findOne({ _id: userData._id });
    if (isAdmin.userType !== "Admin") throw HttpException(409, 'Unauthorized to Update HouseDetails')

    const houseDetailId = new mongoose.Types.ObjectId(houseId);
    const updatedCollectionData = await houseModel.findOneAndUpdate({ _id: houseDetailId }, { ...houseData }, { new: true }).lean();
    if (!updatedCollectionData) {
        throw HttpException(409, 'House Detail Not Updated');
    }
    else {
        return updatedCollectionData;
    }
}

const deleteHouseDetail = async (houseId, userData) => {

    const isAdmin = await userModel.findOne({ _id: userData._id });
    if (isAdmin.userType !== "Admin") throw HttpException(409, 'Unauthorized to Remove HouseDetails')

    const houseDetailId = new mongoose.Types.ObjectId(houseId);
    const deletedCollectionData = await houseModel.deleteOne({ _id: houseDetailId }, { new: true }).lean();
    if (!deletedCollectionData) {
        throw HttpException(409, 'House Detail Not Deleted');
    } else {
        return deletedCollectionData;
    }
}
module.exports = { createHouseDetail, getAllHouseDetails, updateHouseDetail, deleteHouseDetail }