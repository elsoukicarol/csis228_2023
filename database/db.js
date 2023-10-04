// we installed mysql2 to help us make the connection to the db and to create queries

/// a promise manages asynchronous data activities (async parallel process)
const mysql = require("mysql2/promise");

const config = require("./config");

var connection;

const connect = async()=>{
    try {
        connection = await mysql.createConnection(config.db);
        console.log("Connected to ", process.env.DB);
    } catch (error) {
        console.log("Failed to connect to ", process.env.DB);
    }
}

const query = async(sql, params) =>{
    if(!connection){
        await connect();
    }
    try {
        const [results] = await connection.execute(sql, params);
        return results;
    } catch (error) {
        console.error("Query error \n", error.message)
        throw error;
    }
}

module.exports = {
    query,
}
