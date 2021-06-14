const express = require('express');

const postController = require('../controllers/postController');
const checkAuthM = require('../middleware/check-auth');
const router = express.Router();

router.post('/',checkAuthM.checkAuth,postController.save);
router.get('/getDetails',postController.show);
router.get('/getInbox',postController.show);
router.patch('/updateData',postController.update);
router.delete('/Delete',postController.destroy)

module.exports =router;