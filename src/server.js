const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.get("/", (request, response, next) => {

    response.json({
        message: "Hello world!"
    });
});

app.get("/databaseHealth", (request, response) => {
    let databaseState = mongoose.connection.readyState;
    let databaseName = mongoose.connection.name;
    let databaseModels = mongoose.connection.modelNames();
    let databaseHost = mongoose.connection.host;

    response.json({
        readyState: databaseState,
        dbName: databaseName,
        dbModels: databaseModels,
        dbHost: databaseHost
    });
});


app.use((error, request, response, next) => {

    response.status(500).json({
        message: "Error occured in the server.",
        error: error.message
    });
});


module.exports = {
    app
}