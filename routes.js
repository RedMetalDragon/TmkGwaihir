const express = require('express');
const router = express.Router();
const { sendEmail } = require('./services/email.service');
const emailValidationMiddleware = require('./middleware/email.validation');


/**
 * Email Service API Endpoints
 * 
 * POST /send-email
 * Description: Sends an email using the provided details.
 * Middleware: emailValidationMiddleware (validates email input)
 * Handler: sendEmail
 * Request body:
 *   - to: Recipient's email address
 *   - subject: Email subject
 *   - text: Plain text content of the email
 *   - html: HTML content of the email (optional)
 * 
 * GET /health
 * Description: Checks the health status of the email service.
 * Response: JSON object with status and message
 */
router.post('/send-email', emailValidationMiddleware, sendEmail);


/**
 * Health Check Endpoint
 * Description: Checks the health status of the email service.
 * Response: JSON object with status and message
 */
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Email service is running' });
});
module.exports = router;
