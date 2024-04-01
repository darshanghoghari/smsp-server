const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    meetingDate: {
        type: String,
        required: true
    },
    meetingTitle: {
        type: String,
        required: true
    },
    meetingDescription: {
        type: String,
        required: true
    },
    meetingTime: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('Meeting', meetingSchema);