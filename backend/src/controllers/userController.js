const userModel = require("../models/user");
const { passwordHash, passwordVerify } = require("../helpers/password");
const { jwtSign } = require("../helpers/jwt");

const userController = {
  addUser: async (req, res, next) => {
    const userData = req.body;
    try {
      const hash = await passwordHash(userData.password);

      userModel
        .createUser({ ...userData, password: hash, role_id: 2 })
        .then((result) => {
          res.status(201).send({
            id: result.insertId,
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
          });
        })
        .catch((err) => next(err));
    } catch (err) {
      next(err);
    }
  },
  userLogin: (req, res, next) => {
    const { email, password } = req.body;
    userModel
      .findUserByEmail(email)
      .then(async ([user]) => {
        if (!user) {
          res.status(401).send({ error: "Invalid email." });
        } else {
          const { id, firstname, lastname, password: hash } = user;
          if (await passwordVerify(hash, password)) {
            const token = jwtSign(
              {
                id,
                firstname,
                lastname,
                email,
              },
              {
                expiresIn: "1h",
              }
            );
            res
              .cookie("access_token", token, {
                httpOnly: true,
                secure: false,
              })
              .status(200)
              .send({ id, firstname, lastname, email });
          } else {
            res.status(401).send({ error: "Invalid password." });
          }
        }
      })
      .catch((err) => next(err));
  },
  userLogout: (_, res) => {
    return res.clearCookie("access_token").sendStatus(200);
  },
};

module.exports = userController;
