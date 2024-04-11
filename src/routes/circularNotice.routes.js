const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const authMiddleware = require('../middlewares/tokenVerify.middleware');
const { createCircularNotice, circularNoticeId, updateCircularNotice } = require('../validations/circularNotice.validations');
const circularNoticeController = require('../controllers/circularNotice.controller');

router.post('/add', authMiddleware, validate(createCircularNotice), circularNoticeController.addCircularNoticeDetail);
router.get('/getDetail', authMiddleware, circularNoticeController.getCircularNoticeDetail);
router.put('/update/:circularNoticeId', authMiddleware, validate(circularNoticeId), validate(updateCircularNotice), circularNoticeController.updateCircularNoticeDetail);
router.delete('/delete/:circularNoticeId', authMiddleware, validate(circularNoticeId), circularNoticeController.deleteCircularNoticeDetail);

module.exports = router;