const express = require('express');
const { CreateUser } = require('../Controllers/UserController');
const router = express.Router();

router.post ('/create',CreateUser) 
module.exports = router;