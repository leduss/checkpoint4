const express = require("express");
const {
  getUsers,
  getUsersById,
  updateOneUser,
} = require("../controllers/usersControllers");

const usersRouter = express.Router();

usersRouter.get("/allUsers", getUsers);
usersRouter.get("/user/:id", getUsersById);
usersRouter.put("/updateUser", updateOneUser);

module.exports = usersRouter;
