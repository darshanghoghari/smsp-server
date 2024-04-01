const meetingServices = require('../services/meeting.service');

const addMeetingDetail = async (req, res, next) => {
    try {
        const userData = req.user;
        const meetingData = req.body;
        meetingData.userId = userData._id;

        const data = await meetingServices.createMeetingData(meetingData);

        res.json({ status: 200, message: 'Meeting Added successfully', data });

    } catch (error) {
        next(error)
    }
}

const getMeetingDetail = async (req, res, next) => {
    try {
        const data = await meetingServices.getMeetingData();

        res.json({ status: 200, message: 'Meeting Get successfully', data });

    } catch (error) {
        next(error)
    }
}

const updateMeetingDetail = async (req, res, next) => {
    try {
        const meetingId = req.params.meetingId;
        const meetingData = req.body;

        const data = await meetingServices.updateMeetingData(meetingId, meetingData);

        res.json({ status: 200, message: 'Meeting update successfully', data });

    } catch (error) {
        next(error)
    }
}

const deleteMeetingDetail = async (req, res, next) => {
    try {
        const meetingId = req.params.meetingId;

        const data = await meetingServices.deleteMeetingData(meetingId);

        res.json({ status: 200, message: 'Meeting deleted successfully', data });

    } catch (error) {
        next(error)
    }
}

module.exports = { addMeetingDetail, getMeetingDetail, updateMeetingDetail, deleteMeetingDetail };