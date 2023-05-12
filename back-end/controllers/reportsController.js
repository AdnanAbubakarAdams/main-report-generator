const express = require("express");
const reports = express.Router();

// QUERIES
const {
    getAllReports
} = require("../queries/reports")

// INDEX 
reports.get("/", async (req, res) => {
    const allReports = await getAllReports();
    if(allReports[0]) {
        res.status(200).json(allReports);
    } else {
        res.status(500).json({ error: "server error"});
    }
});

module.exports = reports;