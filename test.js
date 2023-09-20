
/// it helps manage servers and routes
/// importing the library
const express = require("express");

/// initializing class express
const app = express();


/// commonly use 3001 or 3000
const port = 3001;

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

/// look up asyn and await