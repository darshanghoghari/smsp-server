require('dotenv').config();
const { logger } = require('../utils/logger.util');
const { connect, connection } = require('mongoose');

const databaseConnection = async () => {
    try {

        connection.on('error', async (err) => {
            logger.info(`Mongo Engine is down ${process.env.NODE_ENV}`);
        });

        connection.on('connected', () => {
            logger.info(`Mongo Engine is up on ${process.env.NODE_ENV}`);
        });


        await connect(process.env.MONGODB_URL);
        return connection;

    } catch (error) {
        logger.error("MongoDB Connection Error : ", error);
        return;
    }
};

module.exports = databaseConnection;

// require('dotenv').config();
// const mongoose = require('mongoose');
// const { logger } = require('../utils/logger.util');

// const url = process.env.MONGODB_URL


// const databaseConnection = mongoose.connect(url)
//     .then(() => {
//         console.log('Database Connected');
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// module.exports = databaseConnection;