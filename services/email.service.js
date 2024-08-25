const ses = require('../config/ses.config');
const logger = require('../utilities/logger');
const { getEmailTemplate } = require('../templates/tmk.template');

const sendEmail = async (req, res) => {
  const { to, subject, text, html } = req.body;

  // Use the email template
  const htmlContent = getEmailTemplate(html || text);

  const params = {
    Source: process.env.SES_SENDER_EMAIL,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Text: { Data: text },
        Html: { Data: htmlContent },
      },
      Subject: { Data: subject },
    },
  };

  try {
    await ses.sendEmail(params).promise();
    logger.info(`Email sent successfully to ${to}`);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    logger.error(`Error sending email: ${error.message}`);
    res.status(500).send(`Error sending email: ${error.message}`);
  }
};

module.exports = { sendEmail };
