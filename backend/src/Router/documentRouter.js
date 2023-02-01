const express = require("express");

const documentRouter = express.Router();

const { getOrdo } = require("../controllers/documentControllers");

documentRouter.get("/:id", getOrdo);

module.exports = documentRouter;
