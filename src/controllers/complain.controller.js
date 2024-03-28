const complainServices = require('../services/complain.service');

const addComplainDetail = async (req, res, next) => {
    try {
        const userData = req.user;
        const complainData = req.body;

        const data = await complainServices.createComplain(complainData, userData);

        res.json({ status: 200, message: 'Complain Added successfully', data });

    } catch (error) {
        next(error)
    }
}

const getComplaintDetail = async (req, res, next) => {
    try {
        const data = await complainServices.getAllComplainDetails();

        res.json({ status: 200, message: 'Complain Fetched successfully', data });

    } catch (error) {
        next(error)
    }
}
module.exports = { addComplainDetail, getComplaintDetail }