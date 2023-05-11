const express = require("express");
const reports = express.Router();

// INDEX 
reports.get("/", (req, res) => {
    res.json({ status: "ok" });
});

module.exports = reports;