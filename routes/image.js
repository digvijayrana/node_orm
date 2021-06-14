const express = require('express');
const imageController = require('../controllers/imageController');
const imageUploader = require('../helpers/imageUpload');

const checkAuth = require('../middleware/check-auth');
const router = express.Router();
router.post('/uploads',imageUploader.upload.single('image'),imageController.upload)

module.exports = router