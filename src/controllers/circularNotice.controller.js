const circularNoticeService = require('../services/circularNotice.service');

const addCircularNoticeDetail = async (req, res, next) => {
    try {
        const userData = req.user;
        const circularNoticeData = req.body;

        circularNoticeData.userId = userData._id;
        circularNoticeData.circularNoticeImage = req.file?.path;

        const data = await circularNoticeService.createCircularNotice(circularNoticeData);

        res.json({ status: 200, message: 'Circular Notice Added successfully', data });

    } catch (error) {
        next(error)
    }
}

const getCircularNoticeDetail = async (req, res, next) => {
    try {
        const data = await circularNoticeService.getCircularNotice();

        res.json({ status: 200, message: 'Circular Notice Get successfully', data });

    } catch (error) {
        next(error)
    }
}

const updateCircularNoticeDetail = async (req, res, next) => {
    try {
        const circularNoticeId = req.params.circularNoticeId;
        const circularNoticeData = req.body;
        const userData = req.user;

        circularNoticeData.circularNoticeImage = req.file?.path;
        const data = await circularNoticeService.updateCircularNotice(circularNoticeId, circularNoticeData, userData);

        res.json({ status: 200, message: 'Circular Notice update successfully', data });

    } catch (error) {
        next(error)
    }
}

const deleteCircularNoticeDetail = async (req, res, next) => {
    try {
        const circularNoticeId = req.params.circularNoticeId;

        const data = await circularNoticeService.deleteCircularNotice(circularNoticeId);

        res.json({ status: 200, message: 'Circular Notice deleted successfully', data });

    } catch (error) {
        next(error)
    }
}

module.exports = { addCircularNoticeDetail, getCircularNoticeDetail, updateCircularNoticeDetail, deleteCircularNoticeDetail };