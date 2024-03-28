const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validate } = require('express-validation');
const { createSignup, loginUser } = require('../validations/auth.validations');

router.post('/signup', validate(createSignup), authController.signupUser);
router.post('/login', validate(loginUser), authController.loginUsers);

module.exports = router