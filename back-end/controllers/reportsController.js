const express = require("express");
const reports = express.Router();

// QUERIES
const {
    getAllReports,
    createReport,
    getReport,
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

// SHOW 
reports.get("/:id", async (req, res) => {
    const { id } = req.params;
    const report = await getReport(id);
    if (report) {
        res.json(report);
    } else {
        res.status(404).json({ error: "not found"});
    }
});

// CREATE 
reports.post("/", async (req, res) => {
    try {
        const report = await createReport(req.body);
        res.json(report);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});
module.exports = reports;