const express = require('express');
const { Contact } = require('../models/ContactModel');
const router = express.Router();

router.get("/", (request, respose) => {
    response.json({
        message:"Contact router activated!"
    });
});

router.get("/all", async(request, response) => {
    let results = await Contact.find().exec();

    response.json({
        message: "Found documents!",
        data: results
    });
});

router.get("/:id", (request, response) => {

});

router.post("/", (request, response) => {

});

router.patch("/:id", (request, response) => {

});

router.delete("/:id", (request, response) => {

});

module.exports = router;