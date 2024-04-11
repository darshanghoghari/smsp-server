const { Joi } = require('express-validation');
const JoiObjectId = require('joi-objectid');
Joi.objectId = JoiObjectId(Joi)

const createMeeting = {
    body: Joi.object({
        meetingDate: Joi.string().required(),
        meetingTitle: Joi.string().required(),
        meetingDescription: Joi.string().required(),
        meetingTime: Joi.string().required(),
    })
}

const updateMeeting = {
    body: Joi.object({
        meetingDate: Joi.string().optional(),
        meetingTitle: Joi.string().optional(),
        meetingDescription: Joi.string().optional(),
        meetingTime: Joi.string().optional(),
    })
}

const meetingId = {
    params: Joi.object({
        meetingId: Joi.objectId().required()
    })
}

module.exports = { createMeeting, updateMeeting, meetingId };