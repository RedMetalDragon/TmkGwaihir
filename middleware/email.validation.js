const { isValidEmail, isValidHTML, sanitizeContent, isValidSubject } = require('../services/validation.service');
const logger = require('../utilities/logger');

const emailValidationMiddleware = (req, res, next) => {
  const { to, subject, html } = req.body;

  // Validate the email address
  if (!isValidEmail(to)) {
    logger.error(`Invalid email address - ${to}`);
    return res.status(400).send('Invalid email address');
  }

  // Validate the subject
  if (!isValidSubject(subject)) {
    logger.error(`Invalid subject`);
    return res.status(400).send('Invalid subject');
  }

  // Validate the HTML content
  if (html && !isValidHTML(html)) {
    logger.error(`Invalid HTML content`);
    return res.status(400).send('Invalid HTML content');
  }

  // Sanitize the HTML content
  if (html) {
    req.body.html = sanitizeContent(html);
  }

  next();
};

module.exports = emailValidationMiddleware;
