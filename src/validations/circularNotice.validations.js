const { Joi } = require('express-validation');
const JoiObjectId = require('joi-objectid');
Joi.objectId = JoiObjectId(Joi)

const createCircularNotice = {
    body: Joi.object({
        circularNoticeTitle: Joi.string().required(),
        circularNoticeDescription: Joi.string().required(),
        circularNoticeReleaseDate: Joi.string().required()

    })
}

const updateCircularNotice = {
    body: Joi.object({
        circularNoticeTitle: Joi.string().optional(),
        circularNoticeDescription: Joi.string().optional(),
        circularNoticeReleaseDate: Joi.string().optional()

    })
}

const circularNoticeId = {
    params: Joi.object({
        circularNoticeId: Joi.objectId().required()
    })
}

module.exports = { createCircularNotice, updateCircularNotice, circularNoticeId };