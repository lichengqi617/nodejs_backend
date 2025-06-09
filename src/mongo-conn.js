const mongoose = require('mongoose');
require('dotenv').config();

async function mongoDBAccess() {
    try {
        const uri = `mongodb://${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`;

        const conn = await mongoose.connect(uri);
        console.log(`Successfully connected to MONGO_URI: ${conn.connection.host}`);
    }
    catch (e) {
        console.log(`Error connection to mongo: ${e.message}`);
        process.exit(1);
    }
}

module.exports = mongoDBAccess;