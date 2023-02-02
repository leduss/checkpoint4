const express = require("express");
const valueRouter = require("./valueRouter");
const documentRouter = require("./documentRouter");
const usersRouter = require("./usersRouter");
const doctorRouter = require("./doctorRouter");
const laboRouter = require("./laboRouter");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/values", valueRouter);
router.use("/documents", documentRouter);
router.use("/doctors", doctorRouter);
router.use("/labos", laboRouter);

module.exports = router;
