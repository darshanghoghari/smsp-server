const { Joi } = require('express-validation');
const JoiObjectId = require('joi-objectid');
Joi.objectId = JoiObjectId(Joi)

const createClubBooking = {
    body: Joi.object({
        clubBookingDate: Joi.string().required(),
        clubBookingTitle: Joi.string().required(),
        clubBookingDescription: Joi.string().optional(),
        clubBookingRequestRent: Joi.number().optional(),
        clubBookingNoteByAdmin: Joi.string().optional(),
        isBooked: Joi.boolean().optional(),
        alternativeDate: Joi.string().optional()
    })
}

const updateClubBooking = {
    body: Joi.object({
        clubBookingDate: Joi.string().optional(),
        clubBookingTitle: Joi.string().optional(),
        clubBookingDescription: Joi.string().optional(),
        clubBookingRequestRent: Joi.number().optional(),
        clubBookingNoteByAdmin: Joi.string().optional(),
        isBooked: Joi.boolean().optional(),
        alternativeDate: Joi.string().optional()
    })
}

const clubBookingId = {
    params: Joi.object({
        clubBookingId: Joi.objectId().required()
    })
}

module.exports = { createClubBooking, updateClubBooking, clubBookingId }

/*
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
    }


*/