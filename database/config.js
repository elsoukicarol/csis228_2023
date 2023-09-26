// config.js is used to create a json object of the database credentials and information

require("dotenv").config();

const config = {

    db:{
        // requesting all info stored in the env file
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        port: process.env.DB_PORT,

        /// limiting number of connections to the database

        // the connectionLimit threw back a problem
        connectionLimit : 10
    }
};

/// export this file so we can use it in other files 

module.exports = config;