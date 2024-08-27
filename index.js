require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const logger = require('./utilities/logger');

const app = express();
app.use('/api/v1', routes);
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Email service running on port ${PORT}`);
});
