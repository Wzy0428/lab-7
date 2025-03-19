const express = require('express');
const serverless = require('serverless-http');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const router = express.Router();

app.use(cors());

router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/.netlify/functions/api', router);  //Lambda function accessible at /api

module.exports = app;
module.exports.handler = serverless(app);  //Export the serverless handler for Netlify
