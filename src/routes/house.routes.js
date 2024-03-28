const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const { addHouseDetail, updateHouseDetail, getHouseDetail, deleteHouseDetail } = require('../controllers/house.controller');
const { createHouse, houseId, updateHouse } = require('../validations/house.validations');
const authMiddleware = require('../middlewares/tokenVerify.middleware');


router.post('/add', authMiddleware, validate(createHouse), addHouseDetail);
router.get('/getDetail', authMiddleware, getHouseDetail);
router.put('/update/:houseId', authMiddleware, validate(houseId), validate(updateHouse), updateHouseDetail);
router.delete('/delete/:houseId', authMiddleware, validate(houseId), deleteHouseDetail);

module.exports = router