const express = require("express");
const reports = express.Router();

// QUERIES
const {
    getAllReports,
    createReport,
    deleteReport,
    updateReport,
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

// DELETE 
reports.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedReport = await deleteReport(id);
    if (deletedReport.id) {
        res.status(200).json(deletedReport);
    } else {
        res.status(400).json("the said report not found");
    }
});

// UPDATE
reports.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedReport = await updateReport(req.body, id);
    if (updatedReport.id) {
        res.status(200).json(updatedReport);
    } else {
        res.status(400).json({ error: "Your report has not been updated sir"});
    }
});

module.exports = reports;