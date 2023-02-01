const express = require("express");

const valueRouter = express.Router();

const {
  getValueByUser,
  addValueByUser,
} = require("../controllers/valueControllers");

valueRouter.get("/:id", getValueByUser);

valueRouter.post("/", addValueByUser);

module.exports = valueRouter;
