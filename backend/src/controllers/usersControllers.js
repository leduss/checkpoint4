const usersModel = require("../models/users");

const usersControllers = {
  getUsers: (_, res, next) => {
    usersModel
      .getAllUsers()
      .then((users) => {
        res.status(201).send(users);
      })
      .catch((err) => next(err));
  },
  getUsersById: (req, res, next) => {
    const { id } = req.params;
    usersModel
      .findUsersById(id)
      .then(([result]) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
  updateOneUser: (req, res) => {
    const patientData = req.body;
    const { id } = req.params;
    usersModel
      .updateUser(patientData, id)
      .then((users) => {
        if (users.affectedRows !== 0) {
          res
            .status(201)
            .send({ message: "Votre profil a été mis à jour! 😀" });
        } else {
          res.status(401).send({ message: "Error update patient 😞" });
        }
      })
      .catch(() => {
        res.status(500).send({ message: "Il manque des données! 😞" });
      });
  },
};

module.exports = usersControllers;
