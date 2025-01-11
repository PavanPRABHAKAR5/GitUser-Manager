const mongoose = require('mongoose');

require('dotenv').config();
let URI = "mongodb+srv://pavanprabhakar4:PZ7veDKV9AIBTYKi@cluster0.bmhdp.mongodb.net/github-users";

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;