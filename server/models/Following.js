const mongoose = require('mongoose');

const FollowingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    friendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

FollowingSchema.index({userId: 1, friendId: 1}, {unique: true});

module.exports = mongoose.model('Following', FollowingSchema);