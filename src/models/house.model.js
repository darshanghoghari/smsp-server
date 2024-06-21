const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    houseNo: {
        type: String, // prefix houseNo with 'HN-'
        required: true,
        trim: true,
    },
    houseType: {
        type: String,
        enum: ['1BHK', '2BHK'],
        default: '1BHK'
    },
    houseSellPrice: {
        type: Number,
        default: 0,
        trim: true,
    },
    houseOnRantMoney: {
        type: Number,
        default: 0,
        trim: true,
    },
    houseOnSale: {
        type: Boolean,
        default: true
    },
    houseFloorCount: {
        type: Number,
        min: 1,
        default: 1,
        trim: true,
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
    },
    adminUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model("House", houseSchema);
