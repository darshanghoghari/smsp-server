const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    meetingDate: {
        type: String,
        required: true,
        trim: true,
    },
    meetingTitle: {
        type: String,
        required: true,
        trim: true,
    },
    meetingDescription: {
        type: String,
        required: true,
        trim: true,
    },
    meetingTime: {
        type: String,
        required: true,
        trim: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Meeting', meetingSchema);