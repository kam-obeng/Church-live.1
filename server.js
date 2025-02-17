const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Catch-all route for 404s
app.use((req, res) => {
  res.status(404).send("404: Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//node server.js