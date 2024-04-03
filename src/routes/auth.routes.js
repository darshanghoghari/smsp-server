const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validate } = require('express-validation');
const { createSignup, loginUser } = require('../validations/auth.validations');
const upload = require('../middlewares/multer.middleware');

router.get('/signup', (req, res) => {
    return res.render('signup')
})

router.post('/signup', validate(createSignup), upload.single('photoProof'), authController.signupUser);
router.post('/login', validate(loginUser), authController.loginUsers);

module.exports = router