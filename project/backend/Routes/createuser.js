const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Admin = require('../models/Admin');
const Player = require('../models/Player');
const bcrypt= require ("bcryptjs");
const jwt= require("jsonwebtoken");
const jwtSecret ="Mynameisthisthatthosetheseyoutubechannel"
router.post('/createuser', async (req, res) => {
    try {
        await User.create({
            username: req.body.username,
            email: req.body.email,
            location: req.body.location,
            password: req.body.password
        });

        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false, message: 'Failed to create user' });
    }
});


router.post('/loginuser', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database based on the provided username
        const user = await User.findOne({ username });

        // If user is not found or password doesn't match, return error
        if (!user || user.password !== password) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
        const data ={
            userData:{
                id:user.id
            }
        }
        const authToken= jwt.sign(data,jwtSecret)

        // If user is found and password matches, return success message
        res.status(200).json({ success: true,authToken:authToken });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: false, message: 'Failed to login' });
    }
});

router.post('/adminlogin', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the admin in the database based on the provided username
        const admin = await Admin.findOne({ username });

        // If admin is not found or password doesn't match, return error
        if (!admin || admin.password !== password) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
        const data ={
            userData:{
                id:admin.id
            }
        }
        const authToken= jwt.sign(data,jwtSecret)

        // If admin is found and password matches, return success message
        res.status(200).json({ success: true,authToken:authToken });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: false, message: error.message || 'Failed to login' });
    }
});

router.post('/createplayer', async (req, res) => {
    try {
        await Player.create({
            username: req.body.username,
            email: req.body.email,
            location: req.body.location,
            password: req.body.password,
        });

        res.status(201).json({ success: true, message: 'Player created successfully' });
    } catch (error) {
        console.error('Error creating player:', error);
        res.status(500).json({ success: false, message: 'Failed to create player' });
    }
});

module.exports = router;
