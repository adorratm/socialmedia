const express = require('express');
const router = express.Router();
const User = require('../models/Users');
// Get By Id
router.get('/get/:id', async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id.trim() });
        if (!user) return res.status(404).json({ error: 'User Not Found.' });

        res.status(200).json(user);
    } catch (error) {
        if (error) return res.status(400).json({ error: 'Bad Request' });
    }
});

// Get All User Route
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length <= 0) return res.status(404).json({ error: 'Users Not Found.' });

        res.status(200).json(users);
    } catch (error) {
        if (error) return res.status(400).json({ error: error.message });
    }
});

// Create New User
router.post('/add', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        if (error) return res.status(400).json({ error: error.message });
    }
});

// Update By Id
router.put('/update/:id', async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id.trim() });
        if (!user) return res.status(404).json({ error: 'User Not Found.' });

        const updatedUser = await User.findByIdAndUpdate({ _id: req.params.id.trim() }, { $set: req.body });
        res.status(200).json(updatedUser);
    } catch (error) {
        if (error) return res.status(400).json({ error: error.message });
    }
});

// Delete By Id
router.delete('/delete/:id', async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id.trim() });
        if (!user) return res.status(404).json({ error: 'User Not Found.' });

        const deletedUser = await User.findByIdAndDelete({ _id: req.params.id.trim() });
        res.status(200).json(deletedUser);
    } catch (error) {
        if (error) return res.status(400).json({ error: error.message });
    }
});



module.exports = router

