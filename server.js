const express = require("express");  // Import Express.js
const path = require("path");        // Import Path module

const app = express();               // Create Express app
const PORT = process.env.PORT || 10000; // Use Render's port or default 10000

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Route to serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
