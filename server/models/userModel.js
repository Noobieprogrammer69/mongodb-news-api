const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        unique: true,
        maxLength: 30,
        required: true,
    },
    fullName: {
        type: String,
        trim: true,
        maxLength: 30,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: '',
    },
    phone: {
        type: String,
        default: '',
    },
    avatar: {
        type: String,
        default:''
    },
    story: {
        type: String,
        default: '',
        maxLength: 200,
    },
    friends: [{
        type: mongoose.Types.ObjectId, ref:'user'
    }],
    following: [{
        type: mongoose.Types.ObjectId, ref:'user'
    }],

}, {
    timestamp: true
})

module.exports = mongoose.model('user', userSchema)