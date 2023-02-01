const express = require("express");
const logRouter = require("./logRouter");
const valueRouter = require("./valueRouter");
const documentRouter = require("./documentRouter");
const usersRouter = require("./usersRouter");
const doctorRouter = require("./doctorRouter");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/log", logRouter);
router.use("/values", valueRouter);
router.use("/documents", documentRouter);
router.use("/doctors", doctorRouter);

module.exports = router;
