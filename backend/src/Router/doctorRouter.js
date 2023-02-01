const express = require("express");

const doctorRouter = express.Router();

const { getDoctorByUserId } = require("../controllers/doctorControllers");

doctorRouter.get("/:id", getDoctorByUserId);

module.exports = doctorRouter;
