require('dotenv').config();
const mongoose = require('mongoose');

// console.log('MONGO_URL:', process.env.MONGO_URL); // For debugging


mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => {
        console.log('Error connecting to DB:', err);
    });

module.exports = mongoose.connection;


