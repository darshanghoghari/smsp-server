const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');
const authMiddleware = require('../middlewares/tokenVerify.middleware');
const { createClubBooking, clubBookingId, updateClubBooking } = require('../validations/clubBooking.validation');
const clubBookingController = require('../controllers/clubBooking.controller');

router.post('/add', authMiddleware, validate(createClubBooking), clubBookingController.addClubBookingDetail);
router.get('/getDetail', authMiddleware, clubBookingController.getClubBookingDetail);
router.put('/update/:clubBookingId', authMiddleware, validate(clubBookingId), validate(updateClubBooking), clubBookingController.updateClubBookingDetail);
router.delete('/delete/:clubBookingId', authMiddleware, validate(clubBookingId), clubBookingController.deleteClubBookingDetail);

module.exports = router