const express = require("express");

const doctorRouter = express.Router();

const {
  getDoctorByUserId,
  updateDoctor,
} = require("../controllers/doctorControllers");

doctorRouter.get("/:id", getDoctorByUserId);
doctorRouter.put("/:id", updateDoctor);

module.exports = doctorRouter;
