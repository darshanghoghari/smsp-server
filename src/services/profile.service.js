require('dotenv').config();
const User = require('../models/user.model');
const { HttpException } = require('../exceptions/HttpsException');
const fs = require('fs');
const { uploadImage } = require('../utils/cloudinary.util');
const { mongoose } = require('mongoose');

const getProfileByIdService = async (userId) => {
    const getCollectionData = await User.findOne({ _id: new mongoose.Types.ObjectId(userId) });

    return getCollectionData;
}

module.exports = { getProfileByIdService }