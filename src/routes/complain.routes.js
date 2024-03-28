const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const authMiddleware = require('../middlewares/tokenVerify.middleware');
const { createComplain } = require('../validations/complain.validation');
const complainController = require('../controllers/complain.controller')


router.post('/add', authMiddleware, validate(createComplain), complainController.addComplainDetail);
router.get('/getDetail', authMiddleware, complainController.getComplaintDetail);
// router.put('/update/:houseId', authMiddleware, validate(houseId), validate(updateHouse), updateHouseDetail);
// router.delete('/delete/:houseId', authMiddleware, validate(houseId), deleteHouseDetail);

module.exports = router