const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.use(authController.check_token);
router.get('/user', authController.user_data);

module.exports = router;
