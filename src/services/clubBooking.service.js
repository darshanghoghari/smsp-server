const { mongoose } = require('mongoose');
const clubBookingModel = require('../models/clubBooking.model');
const HttpException = require('http-exception');

const createClubBooking = async (clubBookingDetail) => {
    const newClubBookingDetail = new clubBookingModel(clubBookingDetail);

    const collectionData = await newClubBookingDetail.save();

    return collectionData;
};
const getAllClubBookingData = async () => {
    const collectionData = await clubBookingModel.find({}).sort({ createAt: -1 });

    return collectionData;
};
const updateClubBookingData = async (clubBookingId, clubBookingData) => {
    const updatedCollectionData = await clubBookingModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(clubBookingId) }, { ...clubBookingData }, { new: true });

    if (!updatedCollectionData) new HttpException(409, "Club Booking data not updated...");

    return updatedCollectionData;
};
const deleteClubBookingData = async (clubBookingId) => {
    const deletedCollectionData = await clubBookingModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(clubBookingId) }, { new: true });

    if (!deletedCollectionData) new HttpException(400, "No such Club Booking Data Deleted!");

    return deletedCollectionData;
};


module.exports = { createClubBooking, getAllClubBookingData, updateClubBookingData, deleteClubBookingData };