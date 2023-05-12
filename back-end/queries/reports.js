const db = require("../db/dbConfig.js");

// ALL REPORTS
const getAllReports = async () => {
    try {
        const allReports = await db.any("SELECT * FROM reports");
        return allReports;
    } catch (error) {
        return error;
    }
};

// SINGLE REPORT
const getReport = async (id) => {
    try {
        const oneReport = await db.one("SELECT * FROM reports WHERE id=$1", id);
        return oneReport;
    } catch (error) {
        return error;
    }
};

// CREATE A REPORT 
const createReport = async (report) => {
    const {location, transaction_date, deposit, name} = report;
    try {
        const newReport = await db.one(
            "INSERT INTO reports (location, transaction_date, deposit, name) VALUES ($1, $2, $3, $4) RETURNING *",
            [location, transaction_date, deposit, name]
        );
        return newReport;
    } catch (error) {
        return error;
    }
}


module.exports = {
    getAllReports,
    createReport,
    getReport,

};