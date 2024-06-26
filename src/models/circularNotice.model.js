const mongoose = require('mongoose');

const circularSchema = new mongoose.Schema({
    circularNoticeTitle: {
        type: String,
        required: true
    },
    circularNoticeDescription: {
        type: String,
        required: true
    },
    circularNoticeReleaseDate: {
        type: String,
        required: true
    },
    circularNoticeImage: {
        type: String,
        default: ''
    },
    onCloudinaryLink: {
        type: String,
        default: '',
        trim: true
    },
    cloudPublicId: {
        type: String,
        default: '',
        trim: true
    },
    issuedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Circular', circularSchema);