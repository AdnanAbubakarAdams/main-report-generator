// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// CONTROLLERS 
const reportsController = require("./controllers/reportsController.js");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONTROLLERS MIDDLEWARE
app.use("/reports", reportsController);

// ROUTES // THE WELCOME ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to my report generator");
});

// THE CATCH ALL 404 ROUTE
app.get("*", (req, res) => {
    res.status(404).send("page not found, please try again");
});

// EXPORT
module.exports = app;