const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const authMiddleware = require('../middlewares/tokenVerify.middleware');
const { createComplain, complainId, updateComplain } = require('../validations/complain.validation');
const complainController = require('../controllers/complain.controller')


router.post('/add', authMiddleware, validate(createComplain), complainController.addComplainDetail);
router.get('/getDetail', authMiddleware, complainController.getComplaintDetail);
router.put('/update/:complainId', authMiddleware, validate(complainId), validate(updateComplain), complainController.updateComplaint);
router.delete('/delete/:complainId', authMiddleware, validate(complainId), complainController.deleteComplaint);

module.exports = router