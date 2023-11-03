const express = require('express');
const router = express.Router();
const apiController = require('../controller/index');
const validateCandidate = require('../validation');
const imageUpload = require('../generic');

// Define API routes
router.post('/user',validateCandidate, apiController.addUserInformation);
router.post('/upload',imageUpload);


module.exports = router;