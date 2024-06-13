const { mongoose } = require('mongoose');
const complainModel = require('../models/complain.model');
const { HttpException } = require('../exceptions/HttpsException');
const { uploadImage, deleteImage } = require('../utils/cloudinary.util');

const createComplain = async (complainData, userData) => {
    complainData.complainedBy = userData._id;

    //upload on cloudinary  and get image url to save it into the database
    const cloudImageLink = await uploadImage(complainData?.proofAttachment);

    console.log(cloudImageLink, "<------------------------>")

    if (cloudImageLink) {
        complainData.onCloudinaryLink = await cloudImageLink?.secure_url;
        complainData.cloudPublicId = await cloudImageLink?.public_id;
    }

    const newComplainDetail = new complainModel(complainData);
    const collectionData = await newComplainDetail.save();

    return collectionData;
}

const getAllComplainDetails = async () => {
    const collectionData = await complainModel.find().sort({ createdAt: -1 });

    return collectionData;
}

const updateComplainDetail = async (complainId, complainData) => {

    const findCollection = await complainModel.findOne({ _id: new mongoose.Types.ObjectId(complainId) });


    if (!findCollection) throw HttpException(409, "No Data Found");
    if (complainData.proofAttachment !== findCollection.onCloudinaryLink && complainData.proofAttachment !== undefined && complainData.proofAttachment !== null) {


        const oldImagePublicId = findCollection.cloudPublicId;

        await deleteImage(oldImagePublicId);

        const cloudImageLink = await uploadImage(complainData?.proofAttachment);
        complainData.onCloudinaryLink = await cloudImageLink?.secure_url;
        complainData.cloudPublicId = await cloudImageLink?.public_id;
    }

    const updatedCollection = await complainModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(complainId) }, { ...complainData }, { new: true });

    if (!updatedCollection) throw HttpException(409, "Complain Data Not Updated");

    return updatedCollection;

}

const deleteComplainDetail = async (complainId) => {
    const deletedCollectionData = await complainModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(complainId) }, { new: true });

    if (!deletedCollectionData) throw HttpException(409, "Complain Not Deleted");

    const oldImagePublicId = deletedCollectionData.cloudPublicId;

    await deleteImage(oldImagePublicId);

    return deletedCollectionData;
}

module.exports = { createComplain, getAllComplainDetails, updateComplainDetail, deleteComplainDetail };