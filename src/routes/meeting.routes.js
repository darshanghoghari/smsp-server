const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const authMiddleware = require('../middlewares/tokenVerify.middleware');
const { createMeeting, meetingId, updateMeeting } = require('../validations/meeting.validation');
const meetingController = require('../controllers/meeting.controller');

router.post('/add', authMiddleware, validate(createMeeting), meetingController.addMeetingDetail);
router.get('/getDetail', authMiddleware, meetingController.getMeetingDetail);
router.put('/update/:meetingId', authMiddleware, validate(meetingId), validate(updateMeeting), meetingController.updateMeetingDetail);
router.delete('/delete/:meetingId', authMiddleware, validate(meetingId), meetingController.deleteMeetingDetail);

module.exports = router