const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/createuser', async (req, res) => {
    try {
        await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        });

        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false, message: 'Failed to create user' });
    }
});

module.exports = router;
