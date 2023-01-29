const express = require("express");

const userRouter = express.Router();

const {
  addUser,
  userLogin,
  userLogout,
} = require("../controllers/userController");
const credentialsCheck = require("../middleware/credentialsCheck");
const authorization = require("../helpers/authentication");

userRouter.post("/signIn", credentialsCheck, addUser);

userRouter.post("login", credentialsCheck, userLogin);
userRouter.get("/logout", authorization, userLogout);

module.exports = userRouter;
