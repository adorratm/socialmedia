const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role_id: {
        type: new mongoose.Types.ObjectId(),
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    rank:{
        type:Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    token: {
        type: String,
    },
});

module.exports = mongoose.model('user', UsersSchema)