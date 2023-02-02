const laboModel = require("../models/labo");

const laboController = {
  getLaboByUserId: (req, res, next) => {
    const { id } = req.params;
    laboModel
      .findLaboByUserId(id)
      .then(([result]) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
  updateLabo: (req, res) => {
    const laboData = req.body;
    const { id } = req.params;
    laboModel
      .updateOneLabo(laboData, id)
      .then((doctor) => {
        if (doctor.affectedRows !== 0) {
          res.status(201).send({ message: "Mis à jour! 😀" });
        } else {
          res.status(401).send({ message: "Error update doctor 😞" });
        }
      })
      .catch(() => {
        res.status(500).send({ message: "Il manque des données! 😞" });
      });
  },
};

module.exports = laboController;
