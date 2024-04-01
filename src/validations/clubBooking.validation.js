const { Joi } = require('express-validation');
const JoiObjectId = require('joi-objectid');
Joi.objectId = JoiObjectId(Joi)

const createClubBooking = {
    body: Joi.object({
        clubBookingDate: Joi.string().required(),
        clubBookingTitle: Joi.string().required(),
        clubBookingDescription: Joi.string().optional(),
        clubBookingRequestRent: Joi.number().optional(),

    })
}

const updateClubBooking = {
    body: Joi.object({
        clubBookingDate: Joi.string().optional(),
        clubBookingTitle: Joi.string().optional(),
        clubBookingDescription: Joi.string().optional(),
        clubBookingRequestRent: Joi.number().optional(),

    })
}

const clubBookingId = {
    params: Joi.object({
        clubBookingId: Joi.objectId().required()
    })
}

module.exports = { createClubBooking, updateClubBooking, clubBookingId }