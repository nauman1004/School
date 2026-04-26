const express = require("express");
const cors = require("cors");
const path = require("path");

const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Serve static FIRST
app.use(express.static(path.join(__dirname, "public")));

// ✅ THEN routes
app.use("/api", schoolRoutes);

// ✅ Explicit root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});