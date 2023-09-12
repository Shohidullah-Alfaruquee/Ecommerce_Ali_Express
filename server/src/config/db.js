const mongoose = require('mongoose');
const { mongoDBURL } = require('../secret');

const connectDatabase = async (options={}) => { 
    try {
        await mongoose.connect(mongoDBURL, options);
        console.log("connection established successfully.");
        mongoose.connection.on('error', (error) => { 
            console.error("DB connection error", error)
         })
    } catch (error) {
        console.error("Couldn't connected to DB", error.toString());
    }
 }

 module.exports = connectDatabase;