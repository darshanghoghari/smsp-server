const { Joi } = require('express-validation');
const JoiObjectId = require('joi-objectid');
Joi.objectId = JoiObjectId(Joi)

const createComplain = {
    body: Joi.object({
        complainTitle: Joi.string().required(),
        complainDescription: Joi.string().required(),
        proofAttachment: Joi.string().optional()
    })
}

const updateComplain = {
    body: Joi.object({
        complainTitle: Joi.string().optional(),
        complainDescription: Joi.string().optional(),
        proofAttachment: Joi.string().optional(),
        isResolved: Joi.boolean().optional(),
        proofAttachment: Joi.string().optional()
    })
}

const complainId = {
    params: Joi.object({
        complainId: Joi.objectId().required()
    })
}



module.exports = { createComplain, updateComplain, complainId };