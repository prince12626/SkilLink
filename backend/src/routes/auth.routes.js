const express = require('express');
const { userRegister, userLogin, freelancerLogin, freelancerRegister } = require("../controllers/auth.controller");
const router = express.Router();

router.post('/auth/user/register', userRegister);
router.post('/auth/user/login', userLogin);
router.post('/auth/freelancer/register', freelancerRegister);
router.post('/auth/freelancer/login', freelancerLogin);

module.exports = router;