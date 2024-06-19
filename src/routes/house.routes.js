const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const houseController = require('../controllers/house.controller');
const { createHouse, houseId, updateHouse } = require('../validations/house.validations');
const authMiddleware = require('../middlewares/tokenVerify.middleware');


router.post('/add', authMiddleware, validate(createHouse), houseController.addHouseDetail);
router.get('/getDetail', authMiddleware, houseController.getHouseDetail);
router.get('/getDetailByUsersId', authMiddleware, houseController.getHouseDetailByUsersId);
router.put('/update/:houseId', authMiddleware, validate(houseId), validate(updateHouse), houseController.updateHouseDetail);
router.delete('/delete/:houseId', authMiddleware, validate(houseId), houseController.deleteHouseDetail);

module.exports = router