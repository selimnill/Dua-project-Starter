const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const port = 5000;

// Connect to SQLite database
const db = new sqlite3.Database("dua_main.sqlite");

// Middleware to parse JSON requests
app.use(express.json());

// Define routes and handle database queries

app.get("/", (req, res) => {
  res.send("port running 5000 port from tis ");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
