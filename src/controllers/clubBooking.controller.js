const clubBookingService = require('../services/clubBooking.service');

const addClubBookingDetail = async (req, res, next) => {
    try {
        const userData = req.user;
        const clubBookingData = req.body;
        clubBookingData.userId = userData._id;

        const data = await clubBookingService.createClubBooking(clubBookingData);

        res.json({ status: 200, message: 'Complain Added successfully', data });

    } catch (error) {
        next(error)
    }
}

const getClubBookingDetail = async (req, res, next) => {
    try {
        const data = await clubBookingService.getAllClubBookingData();

        res.json({ status: 200, message: 'Complain Added successfully', data });

    } catch (error) {
        next(error)
    }
}

const updateClubBookingDetail = async (req, res, next) => {
    try {
        const clubBookingId = req.params.clubBookingId;
        const clubBookingData = req.body;

        const data = await clubBookingService.updateClubBookingData(clubBookingId, clubBookingData);

        res.json({ status: 200, message: 'Complain Added successfully', data });

    } catch (error) {
        next(error)
    }
}

const deleteClubBookingDetail = async (req, res, next) => {
    try {
        const clubBookingId = req.params.clubBookingId;

        const data = await clubBookingService.deleteClubBookingData(clubBookingId);

        res.json({ status: 200, message: 'Complain Added successfully', data });

    } catch (error) {
        next(error)
    }
}

module.exports = { addClubBookingDetail, getClubBookingDetail, updateClubBookingDetail, deleteClubBookingDetail };