const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router();


const userController = require('../controllers/user');
const mutualFollowers = require('../controllers/mutualFollowers');
const userManagement = require('../controllers/userManagement');

router.post('/userInfo', [body('username').isString().notEmpty()], userController);

router.post('/mutualFollowers', mutualFollowers);

router.post('/fetchUser', userManagement.fetchUsers);

router.get('/search/', userManagement.searchUsers); 

router.delete('/delete/:username', userManagement.softDeleteuser);

router.put('/update/:username', userManagement.updateUserInfo);

router.get('/fetchUserSorted', userManagement.fetchUserSorted);

module.exports = router;