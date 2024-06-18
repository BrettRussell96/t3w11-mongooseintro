const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.get("/", (request, response, next) => {

    response.json({
        message: "Hello world!"
    });
});

const ContactRouter = require('./controllers/ContactRouter');
app.use(ContactRouter);

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

app.get("*", (request, response) => {
    response.json({
        message: "404 route activated"
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