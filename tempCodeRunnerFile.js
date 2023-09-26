
/// it helps manage servers and routes
/// importing the library
const express = require("express");

/// initializing class express
const app = express();


/// To request the variables from the env file we need to import the file

// the next statement is used to import the dotenv a library 
require("dotenv").config();
/// commonly use 3001 or 3000

// requiring the config.js file 
// the . before the path is because we went one directory back
const config = require("./database/config");

/// here we are accessing the variable inside the env file


const query = require("./database/db");
// the process.env is a global object used to access all the variables in the env file
const port = process.env.PORT;

/// "/" means index page or homepage

/// app methods: GET, POST, DELETE, UPDATE


/// htpp takes two parameters, request(what we're sending) 
/// and response (what we're returning)
app.get("/", (request, response) => {
    /// returning OK
    response.status(200).json({
        message: "Succesful",
    });
});

/// port 3001
app.listen(port);

console.log("App is runnin on port", port);


/// Second route

// const test = 3000;

app.get("/test", (request, response) => {
    response.status(200).json({
        message: "test",
    });
})

app.get("/users", async(request, response) => {
    const userSQL = "SELECT * FROM USERS";
    const users = await query(userSQL);
    response.status(200).json({users});
})

/// look up asyn and await

console.log(config);