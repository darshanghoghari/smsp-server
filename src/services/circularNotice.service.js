const circularNoticeModel = require('../models/circularNotice.model');
const { HttpException } = require('../exceptions/HttpsException');
const { uploadImage, deleteImage } = require('../utils/cloudinary.util');
const { mongoose } = require('mongoose');

const createCircularNotice = async (circularNoticeData) => {

    if (circularNoticeData.circularNoticeImage !== undefined && circularNoticeData.circularNoticeImage !== null) {
        const cloudImageLink = await uploadImage(circularNoticeData?.circularNoticeImage);
        circularNoticeData.onCloudinaryLink = await cloudImageLink?.secure_url;
        circularNoticeData.cloudPublicId = await cloudImageLink?.public_id;
    }

    const newCircularNotice = new circularNoticeModel(circularNoticeData);

    const collectionData = await newCircularNotice.save();

    return collectionData;
}
const getCircularNotice = async () => {
    const collectionData = await circularNoticeModel.find({}).sort({ createAt: -1 });

    return collectionData;
}
const updateCircularNotice = async (circularNoticeId, circularNoticeData, userData) => {
    if (userData.userType === 'Admin') {
        const getCollectionData = await circularNoticeModel.findOne({ _id: new mongoose.Types.ObjectId(circularNoticeId) });

        if (!getCollectionData) throw HttpException(409, "No Data Found");

        if (circularNoticeData.circularNoticeImage !== getCollectionData.onCloudinaryLink && circularNoticeData.circularNoticeImage !== undefined && circularNoticeData.circularNoticeImage !== null) {

            if (getCollectionData.cloudPublicId) {
                const oldImagePublicId = getCollectionData.cloudPublicId;

                await deleteImage(oldImagePublicId);
            }


            const cloudImageLink = await uploadImage(circularNoticeData?.circularNoticeImage);
            circularNoticeData.onCloudinaryLink = await cloudImageLink?.secure_url;
            circularNoticeData.cloudPublicId = await cloudImageLink?.public_id;
        }

        const updatedCollection = await circularNoticeModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(circularNoticeId) }, { ...circularNoticeData }, { new: true });

        if (!updatedCollection) throw HttpException(409, "Profile Data Not Updated");

        return updatedCollection;
    }
    else {

        throw HttpException(401, "Unauthorized To Access....")
    }
}
const deleteCircularNotice = async (circularNoticeId) => {
    const deletedCollectionData = await circularNoticeModel.findOneAndDelete({ _id: circularNoticeId }, { new: true });

    if (!deletedCollectionData) new HttpException(405, 'circular notice not deleted');

    const oldImagePublicId = deletedCollectionData.cloudPublicId;

    await deleteImage(oldImagePublicId);

    return deletedCollectionData;
}

module.exports = { createCircularNotice, getCircularNotice, updateCircularNotice, deleteCircularNotice };