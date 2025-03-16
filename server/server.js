const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sunil@ipro#25",
    database: "i_pro_website_portal_db",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});

// API Route to Save Data
app.post("/api/save", (req, res) => {
    const { name, phno, city, email, description } = req.body;

    if (!name || !phno || !city || !email || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const sql = "INSERT INTO i_pro_website_portal (name, phno, city, email, description) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, phno, city, email, description], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).json({ message: "Database error" });
        } else {
            res.json({ message: "Data saved successfully" });
        }
    });
});

// Start Server
app.listen(3002, () => {
    console.log("Server running on port 3002");
});
