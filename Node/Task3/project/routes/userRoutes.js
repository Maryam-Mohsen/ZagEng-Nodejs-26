const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect, restrictTo } = require('../middleware/auth');
const upload = require('../middleware/upload');

// All routes below require authentication
router.use(protect);

// Current user routes
router.get('/me', userController.getMe);
router.patch('/me/profile-pic', upload.single('profilePic'), userController.uploadProfilePic);

// Admin-only: get all users with pagination
router.get('/', restrictTo('admin'), userController.getAllUsers);

// Single user routes
router.get('/:id', userController.getUserById);
router.patch('/:id', userController.updateUser);

// Admin-only: delete a user
router.delete('/:id', restrictTo('admin'), userController.deleteUser);

module.exports = router;
