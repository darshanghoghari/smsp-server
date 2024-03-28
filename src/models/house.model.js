const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    houseNo: {
        type: String, // prefix houseNo with 'HN-'
        required: true
    },
    houseType: {
        type: String,
        enum: ['1BHK', '2BHK']
    },
    houseSellPrice: {
        type: Number,
        default: 0
    },
    houseOnRateMoney: {
        type: Number,
        default: 0
    },
    houseOnSale: {
        type: Boolean,
        default: false
    },
    houseFloorCount: {
        type: Number,
        min: 1,
        default: 1
    },
    houseOwnerUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    houseOnRentTenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model("House", houseSchema);
