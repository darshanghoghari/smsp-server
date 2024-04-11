const { Joi } = require('express-validation');
const JoiObjectId = require('joi-objectid');
Joi.objectId = JoiObjectId(Joi)

const createHouse = {
    body: Joi.object({
        houseNo: Joi.string().required(),
        houseType: Joi.string().required(),
        houseSellPrice: Joi.number().optional().empty(0),
        houseOnRantMoney: Joi.number().optional().empty(0),
        houseOnSale: Joi.boolean().optional().empty(false),
        houseFloorCount: Joi.number().optional().empty(1),
        houseOwnerUserId: Joi.objectId().optional().empty(null),
        houseOnRentTenantId: Joi.objectId().optional().empty(null)
    })
}

const updateHouse = {
    body: Joi.object({
        houseType: Joi.string().optional(),
        houseSellPrice: Joi.number().optional().empty(0),
        houseOnRantMoney: Joi.number().optional().empty(0),
        houseOnSale: Joi.boolean().optional().empty(false),
        houseFloorCount: Joi.number().optional().empty(1),
        houseOwnerUserId: Joi.objectId().optional().empty(null),
        houseOnRentTenantId: Joi.objectId().optional().empty(null)
    })
}

const houseId = {
    params: Joi.object({
        houseId: Joi.objectId().required()
    })
}
module.exports = { createHouse, updateHouse, houseId }