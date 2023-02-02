const express = require("express");

const valueRouter = express.Router();

const {
  getValueByUser,
  addValueByUser,
  deleteValueByUser,
  getValueIdealByUser,
  updateValueIdealByUser,
} = require("../controllers/valueControllers");

valueRouter.get("/:id", getValueByUser);

valueRouter.post("/", addValueByUser);

valueRouter.delete("/:id", deleteValueByUser);

valueRouter.get("/ideal/:id", getValueIdealByUser);

valueRouter.put("/ideal/:id", updateValueIdealByUser);

module.exports = valueRouter;
