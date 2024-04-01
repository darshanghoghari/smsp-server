const circularNoticeModel = require('../models/circularNotice.model');
const { HttpException } = require('../exceptions/HttpsException');

const createCircularNotice = async (circularNoticeData) => {
    const newCircularNotice = new circularNoticeModel(circularNoticeData);

    const collectionData = await newCircularNotice.save();

    return collectionData;
}
const getCircularNotice = async () => {
    const collectionData = await circularNoticeModel.find({}).sort({ createAt: -1 });

    return collectionData;
}
const updateCircularNotice = async (circularNoticeId, circularNoticeData) => {
    const updatedCollectionData = await circularNoticeModel.findOneAndUpdate({ _id: circularNoticeId }, { ...circularNoticeData }, { new: true });

    if (!updatedCollectionData) new HttpException(409, "circular  notice is not updated");

    return updatedCollectionData;
}
const deleteCircularNotice = async (circularNoticeId) => {
    const deletedCollectionData = await circularNoticeModel.findOneAndDelete({ _id: circularNoticeId }, { new: true });

    if (!deletedCollectionData) new HttpException(405, 'circular notice not deleted');

    return deletedCollectionData;
}

module.exports = { createCircularNotice, getCircularNotice, updateCircularNotice, deleteCircularNotice };