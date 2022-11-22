const express = require('express');
const { login_post } = require('../controllers/authController');
const router = express.Router();

router.post('/', login_post);

module.exports = router;
