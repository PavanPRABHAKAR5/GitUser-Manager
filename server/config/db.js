const mongoose = require('mongoose');

require('dotenv').config();
let URI = process.env.MONGO_URI;

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