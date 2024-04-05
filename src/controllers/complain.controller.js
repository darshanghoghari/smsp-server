const complainServices = require('../services/complain.service');

const addComplainDetail = async (req, res, next) => {
    try {
        const userData = req.user;
        const complainData = req.body;

        complainData.proofAttachment = req.file?.path;
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

const updateComplaint = async (req, res, next) => {
    try {
        const complainId = req.params.complainId;
        const complainData = req.body;

        const data = await complainServices.updateComplainDetail(complainId, complainData);

        res.json({ status: 200, message: 'Complain Update successfully', data });

    } catch (error) {
        next(error)
    }
}

const deleteComplaint = async (req, res, next) => {
    try {
        const complainId = req.params.complainId;

        const data = await complainServices.deleteComplainDetail(complainId);

        res.json({ status: 200, message: 'Complain Deleted successfully', data });

    } catch (error) {
        next(error)
    }
}

module.exports = { addComplainDetail, getComplaintDetail, updateComplaint, deleteComplaint };    