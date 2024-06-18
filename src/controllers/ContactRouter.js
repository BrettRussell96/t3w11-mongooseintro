const express = require('express');
const { Contact } = require('../models/ContactModel');
const router = express.Router();

router.get("/", (request, respose) => {
    response.json({
        message:"Contact router activated!"
    });
});

router.get("/all", async (request, response) => {
    let results = await Contact.find().exec();
    console.log("Found documents:");
    console.log(results);
    response.json({
        message: "Found documents!",
        data: results
    });
});

router.get("/:id", async (request, response) => {
    let results = await Contact.findById(request.params.id).exec();
    console.log("Found document:");
    console.log(results);
    response.json({
        message: "Found document!",
        data: results
    });
});

router.post("/", async (request, response) => {
    let results = await Contact.create(request.body).exec();
    console.log("Created documents:");
    console.log(results);
    response.json({
        message: "Created documents!",
        data: results
    });
});

router.patch("/:id", (request, response) => {

});

router.delete("/:id", (request, response) => {

});

module.exports = router;