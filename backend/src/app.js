const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(
  cors({
    origin: process.env.YOUR_FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

app.use(router);

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

module.exports = app;
