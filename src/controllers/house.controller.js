const houseService = require('../services/house.service');

const addHouseDetail = async (req, res, next) => {
    try {
        const userData = req.user;
        const houseData = req.body;

        const data = await houseService.createHouseDetail(houseData, userData);

        res.json({ status: 200, message: 'House Detail Added successfully', data });

    } catch (error) {
        next(error)
    }
}

const getHouseDetail = async (req, res, next) => {
    try {
        const data = await houseService.getAllHouseDetails();

        res.json({ status: 200, message: 'Fetch All House Detail successfully', data });
    } catch (error) {
        next(error)
    }
}

const getHouseDetailByUsersId = async (req, res, next) => {
    try {
        const userData = req.user;

        const data = await houseService.getHouseDetailsByUserId(userData);

        res.json({ status: 200, message: 'Fetch House Detail successfully', data });
    } catch (error) {
        next(error)
    }
}
const updateHouseDetail = async (req, res, next) => {
    try {
        const houseId = req.params.houseId;
        const houseData = req.body;
        const userData = req.user;

        const data = await houseService.updateHouseDetails(houseId, houseData, userData);

        res.json({ status: 200, message: 'House Detail Update successfully', data });

    } catch (error) {
        next(error)
    }
}
const deleteHouseDetail = async (req, res, next) => {
    try {
        const houseId = req.params.houseId;
        const userData = req.user;

        const data = await houseService.deleteHouseDetails(houseId, userData);

        res.json({ status: 200, message: 'House Detail Deleted successfully', data })
    } catch (error) {
        next(error)
    }
}

module.exports = { addHouseDetail, getHouseDetail, getHouseDetailByUsersId, updateHouseDetail, deleteHouseDetail }