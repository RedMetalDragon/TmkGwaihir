const express = require('express');
const router = express.Router();
const { sendEmail } = require('./services/email.service');
const emailValidationMiddleware = require('./middleware/email.validation');

router.post('/send-email', emailValidationMiddleware, sendEmail);

module.exports = router;
