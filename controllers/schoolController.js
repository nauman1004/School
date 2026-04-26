// controllers/schoolController.js
const db = require("../config/db");
const getDistance = require("../utils/distance");

// ➤ Add School
exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ message: "Invalid coordinates" });
    }

    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: "School added successfully",
            id: result.insertId,
        });
    });
};

// ➤ List Schools
exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ message: "User coordinates required" });
    }

    db.query("SELECT * FROM schools", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        const sorted = results.map((school) => {
            const distance = getDistance(
                latitude,
                longitude,
                school.latitude,
                school.longitude
            );

            return { ...school, distance };
        });

        sorted.sort((a, b) => a.distance - b.distance);

        res.json(sorted);
    });
};

// ➤ Delete School ✅ FIXED
exports.deleteSchool = (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM schools WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: "School deleted successfully" });
    });
};

// ➤ Update School (ADD THIS)
exports.updateSchool = (req, res) => {
    const { id } = req.params;
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
        return res.status(400).json({ message: "All fields are required" });
    }

    db.query(
        "UPDATE schools SET name=?, address=?, latitude=?, longitude=? WHERE id=?",
        [name, address, latitude, longitude, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.json({ message: "School updated successfully" });
        }
    );
};