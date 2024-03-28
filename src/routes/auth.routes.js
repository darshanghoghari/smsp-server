const express = require('express');
const router = express.Router();
const { signupUser, loginUsers } = require('../controllers/auth.controller');
const { validate } = require('express-validation');
const { createSignup, loginUser } = require('../validations/auth.validations');

router.post('/signup', validate(createSignup), signupUser);
router.post('/login', validate(loginUser), loginUsers);

module.exports = router