const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
// Get By Id
router.get('/get/:id', async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id.trim() });

        if (!user) {
            const error = new Error('Sistemde Kayıtlı Kullanıcı Bulunamadı.');
            error.statusCode = 404;
            throw error;
        }
        
        res.status(200).json(user);
    } catch (error) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});

// Get All User Route
router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        if (!users || users.length <= 0) {
            const error = new Error('Sistemde Kayıtlı Kullanıcı Bulunamadı.');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json(users);
    } catch (error) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});

// Create New User
router.post('/add', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});

// Update By Id
router.put('/update/:id', async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id.trim() });

        if (!user) {
            const error = new Error('Sistemde Kayıtlı Kullanıcı Bulunamadı.');
            error.statusCode = 404;
            throw error;
        }

        const updatedUser = await User.findByIdAndUpdate({ _id: req.params.id.trim() }, { $set: req.body });
        res.status(200).json(updatedUser);
    } catch (error) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});

// Delete By Id
router.delete('/delete/:id', async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id.trim() });

        if (!user) {
            const error = new Error('Sistemde Kayıtlı Kullanıcı Bulunamadı.');
            error.statusCode = 404;
            throw error;
        }

        const deletedUser = await User.findByIdAndDelete({ _id: req.params.id.trim() });
        res.status(200).json(deletedUser);
    } catch (error) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});



module.exports = router

