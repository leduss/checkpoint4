const express = require("express");

const logRouter = express.Router();

const {
  addUser,
  userLogin,
  userLogout,
} = require("../controllers/logControllers");
const credentialsCheck = require("../middleware/credentialsCheck");
const authorization = require("../helpers/authentication");

logRouter.post("/signIn", credentialsCheck, addUser);

logRouter.post("login", credentialsCheck, userLogin);
logRouter.get("/logout", authorization, userLogout);

module.exports = logRouter;
