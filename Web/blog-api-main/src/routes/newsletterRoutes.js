const express = require('express');
const router = express.Router();
const { newsletter_post } = require('../controllers/newsletterController');

router.post('/', newsletter_post);

module.exports = router;
