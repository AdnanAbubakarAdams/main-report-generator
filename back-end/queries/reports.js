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


module.exports = {
    getAllReports
};