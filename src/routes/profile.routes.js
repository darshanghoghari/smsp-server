const router = require('express').Router();
const profileController = require('../controllers/profile.controller');
const authMiddleware = require('../middlewares/tokenVerify.middleware');

router.get('/get', authMiddleware, profileController.getProfile);

module.exports = router;