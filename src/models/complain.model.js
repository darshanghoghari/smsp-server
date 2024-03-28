const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
    complainedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    complainTitle: {
        type: String,
        required: true
    },
    complainDescription: {
        type: String,
        required: true
    },
    isResolved: {
        type: Boolean,
        default: false
    },
    proofAttachment: {
        type: String,
        default: ''
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model("Complain", complainSchema);
