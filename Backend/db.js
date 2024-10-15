require('dotenv').config()
const mongoose = require('mongoose');
const mongodb = require('mongodb');

// Connection URL for local MongoDB
const dbURL = 'mongodb://localhost:27017/quiz-app-users'; // Change 'mydatabase' to your database name

// Connecting to MongoDB
const connectDB = async() => {
    mongoose.connect(dbURL)
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.error('Failed to connect to MongoDB:', err));
}


module.exports = connectDB