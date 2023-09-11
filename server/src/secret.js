require('dotenv').config();

const serverPort = process.env.PORT || 3000; // Default to port 3000 if PORT is not set in .env

module.exports = {
    serverPort
};
