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

module.exports = { createComplain }