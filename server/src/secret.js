require('dotenv').config();

const serverPort = process.env.PORT || 3000; // Default to port 3000 if PORT is not set in .env

const mongoDBURL = process.env.MONGODB_ATLAS_URL|| "mongodb://localhost:27017/ecommerceDB"
const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/users/default.png'
module.exports = {
    serverPort,
    mongoDBURL,
    defaultImagePath
};
