const express = require("express");

const laboRouter = express.Router();

const {
  getLaboByUserId,
  updateLabo,
} = require("../controllers/laboControllers");

laboRouter.get("/:id", getLaboByUserId);
laboRouter.put("/:id", updateLabo);

module.exports = laboRouter;
