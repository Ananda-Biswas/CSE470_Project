const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Admin = require('../models/Admin');
const Player = require('../models/Player');
const TeamPlayer = require('../models/Team_player');
const Team = require('../models/Team');
const Member = require('../models/Member_reg');
const Opinion = require('../models/Member_opinion');
const Complaint = require('../models/Complaint');
const PlayerReg = require('../models/Player_reg')


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
   
        // If user is found and password matches, return success message
        res.status(200).json({ success: true,});
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
    
        // If admin is found and password matches, return success message
        res.status(200).json({ success: true});
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

router.post('/assignplayer', async (req, res) => {
    try {
        await TeamPlayer.create({
            teamname: req.body.teamname,
            player1: req.body.player1,
            player2: req.body.player2,
            player3: req.body.player3,
            player4: req.body.player4,
            player5: req.body.player5,
            
        });

        res.status(201).json({ success: true, message: 'Player created successfully' });
    } catch (error) {
        console.error('Error creating player:', error);
        res.status(500).json({ success: false, message: 'Failed to create player' });
    }
});

router.post('/createteam', async (req, res) => {
    try {
        await Team.create({
            teamname: req.body.teamname,
            teamparse: req.body.teamparse,
            numberplayers: req.body.numberplayers,
            homestadium: req.body.homestadium,
            
        });

        res.status(201).json({ success: true, message: 'created successfully' });
    } catch (error) {
        console.error('Error creating:', error);
        res.status(500).json({ success: false, message: 'Failed to create' });
    }
});

router.post('/createmember', async (req, res) => {
    try {
        await Member.create({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            support: req.body.support,
            favourite: req.body.favourite
            
        });

        res.status(201).json({ success: true, message: 'created successfully' });
    } catch (error) {
        console.error('Error creating:', error);
        res.status(500).json({ success: false, message: 'Failed to create' });
    }
});

router.post('/createopinion', async (req, res) => {
    try {
        await Opinion.create({
            name: req.body.name,
            opinion: req.body.opinion
            
        });

        res.status(201).json({ success: true, message: 'created successfully' });
    } catch (error) {
        console.error('Error creating:', error);
        res.status(500).json({ success: false, message: 'Failed to create' });
    }
});
router.post('/createcomplaint', async (req, res) => {
    try {
        await Complaint.create({
            name: req.body.name,
            complaint: req.body.complaint,
            
        });

        res.status(201).json({ success: true, message: 'created successfully' });
    } catch (error) {
        console.error('Error creating:', error);
        res.status(500).json({ success: false, message: 'Failed to create' });
    }
});
router.post('/registerplayer', async (req, res) => {
    try {
        await PlayerReg.create({
            name: req.body.name,
            age: req.body.age,
            country: req.body.country,
            height: req.body.height,
            blood_group: req.body.blood_group,
            debut: req.body.debut,
            price: req.body.price,
            position: req.body.position
            
        });

        res.status(201).json({ success: true, message: 'created successfully' });
    } catch (error) {
        console.error('Error creating:', error);
        res.status(500).json({ success: false, message: 'Failed to create' });
    }
});


  router.get('/playerRegistrations', async (req, res) => {
    try {
      // Construct query object based on request parameters
      const query = {};
      if (req.query.name) query.name = req.query.name;
      if (req.query.age) query.age = req.query.age;
      if (req.query.country) query.country = req.query.country;
      if (req.query.height) query.height = req.query.height;
      if (req.query.blood_group) query.blood_group = req.query.blood_group;
      if (req.query.debut) query.debut = req.query.debut;
      if (req.query.price) query.price = req.query.price;
      if (req.query.position) query.position = req.query.position;
  
      // Find player registrations based on query
      
      const playerRegistrations = await PlayerReg.find(query);
  
      // Send back the retrieved player registrations
      res.status(200).json(playerRegistrations);
    } catch (error) {
      console.error('Error fetching player registrations:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch player registrations' });
    }
  });
  router.get('/showopinions', async (req, res) => {
    try {
      // Construct query object based on request parameters
      const query = {};
      if (req.query.name) query.name = req.query.name;
      if (req.query.opinion) query.opinion = req.query.opinion;
      if (req.query.date) query.date = req.query.date;
  
      // Find player registrations based on query
      
      const showopinions = await Opinion.find(query);
  
      // Send back the retrieved player registrations
      res.status(200).json(showopinions);
    } catch (error) {
      console.error('Error fetching player registrations:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch player registrations' });
    }
  });

  router.get('/showcomplaints', async (req, res) => {
    try {
      // Construct query object based on request parameters
      const query = {};
      if (req.query.name) query.name = req.query.name;
      if (req.query.complaint) query.complaint = req.query.complaint;
      if (req.query.date) query.date = req.query.date;
  
      // Find player registrations based on query
      
      const showComplaint = await Complaint.find(query);
  
      // Send back the retrieved player registrations
      res.status(200).json(showComplaint);
    } catch (error) {
      console.error('Error fetching player registrations:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch player registrations' });
    }
  });

  router.get('/teamRegistrations', async (req, res) => {
    try {
      // Construct query object based on request parameters
      const query = {};
      if (req.query.teamname) query.teamname = req.query.teamname;
      if (req.query.teamparse) query.teamparse = req.query.teamparse;
      if (req.query.numberplayers) query.numberplayers = req.query.numberplayers;
      if (req.query.homestadium) query.homestadium = req.query.homestadium;
  
      // Find player registrations based on query
      
      const showTeams = await Team.find(query);
  
      // Send back the retrieved player registrations
      res.status(200).json(showTeams);
    } catch (error) {
      console.error('Error fetching player registrations:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch player registrations' });
    }
  });
module.exports = router;