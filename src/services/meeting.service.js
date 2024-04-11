const { mongoose } = require('mongoose');
const meetingModel = require('../models/meeting.model');
const { HttpException } = require('../exceptions/HttpsException');

const createMeetingData = async (meetingData) => {
    const newMeetingDetail = new meetingModel(meetingData);

    const collectionData = await newMeetingDetail.save();

    return collectionData;
};

const getMeetingData = async () => {
    const collectionData = await meetingModel.find().sort({ createdAt: -1 });

    return collectionData;
};

const updateMeetingData = async (meetingId, meetingData) => {
    const updatedCollectionData = await meetingModel.findOneAndUpdate({ _id: meetingId }, { ...meetingData }, { new: true });
    if (!updatedCollectionData) {
        throw HttpException(409, 'Meeting Not Updated');
    }
    else {
        return updatedCollectionData;
    }
};

const deleteMeetingData = async (meetingId) => {
    const deletedCollectionData = await meetingModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(meetingId) }, { new: true });

    if (!deletedCollectionData) {
        throw HttpException(409, 'Meeting Detail Not Deleted');
    } else {
        return deletedCollectionData;
    }
};

module.exports = { createMeetingData, getMeetingData, updateMeetingData, deleteMeetingData };