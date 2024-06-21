const { mongoose } = require('mongoose');
const houseModel = require('../models/house.model');
const User = require('../models/user.model');
const { HttpException } = require('../exceptions/HttpsException');


const createHouseDetail = async (houseData, userData) => {

    console.log(userData, "<------------------------>");
    const isAdmin = await User.findOne({ _id: userData._id, userType: 'Admin' });
    console.log(isAdmin, "<------------------------>");

    if (!isAdmin) throw HttpException(409, 'Unauthorized to Add HouseDetails')

    const houseDetailExist = await houseModel.findOne({ houseNo: houseData.houseNo });

    if (houseDetailExist) {
        throw HttpException(409, 'This House Detail already exists!')
    }
    else {
        houseData.adminUserId = isAdmin?._id;

        const newHouseDetail = new houseModel(houseData);

        const collectionData = await newHouseDetail.save();

        return collectionData;
    }
}

const getAllHouseDetails = async () => {

    const collectionData = await houseModel.find();

    return collectionData;
}

const getHouseDetailsByUserId = async (userData) => {

    const collectionData = await houseModel.findOne({ houseOwnerUserId: userData._id });

    return collectionData;
}

const updateHouseDetails = async (houseId, houseData, userData) => {

    const houseDetailId = new mongoose.Types.ObjectId(houseId);

    const updatedCollectionData = await houseModel.findOneAndUpdate({ _id: houseDetailId }, { ...houseData }, { new: true });
    if (!updatedCollectionData) {
        throw HttpException(409, 'House Detail Not Updated');
    }
    else {
        return updatedCollectionData;
    }
}

const deleteHouseDetails = async (houseId, userData) => {

    const isAdmin = await User.findOne({ _id: userData._id, userType: "Admin" });
    if (!isAdmin) throw HttpException(409, 'Unauthorized to Remove HouseDetails')

    const houseDetailId = new mongoose.Types.ObjectId(houseId);
    const deletedCollectionData = await houseModel.findOneAndDelete({ _id: houseDetailId }, { new: true });
    if (!deletedCollectionData) {
        throw HttpException(409, 'House Detail Not Deleted');
    } else {
        return deletedCollectionData;
    }
}
module.exports = { createHouseDetail, getAllHouseDetails, getHouseDetailsByUserId, updateHouseDetails, deleteHouseDetails }