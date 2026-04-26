const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mac123@**",
    database: "school_db",
});

db.connect((err) => {
    if (err) {
        console.error("DB Connection Failed:", err);
    } else {
        console.log("MySQL Connected...");
    }
});

module.exports = db;