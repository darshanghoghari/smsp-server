const mongoose = require('mongoose');

const clubBookingSchema = new mongoose.Schema({

    clubBookingDate: {
        type: Date || String,
        required: true
    },
    clubBookingTitle: {
        type: String,
        required: true
    },
    clubBookingDescription: {
        type: String,
        default: ''
    },
    clubBookingRequestRent: {
        type: Number,
        default: 0
    },
    clubBookingNoteByAdmin: {
        type: String,
        default: ''
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    alternativeDate: {
        type: Date || String,
        default: null
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model("ClubBooking", clubBookingSchema);