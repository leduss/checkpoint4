const valueModel = require("../models/value");

const valueController = {
  getValueByUser: (req, res, next) => {
    const { id } = req.params;
    valueModel
      .getValuesByUserId(id)
      .then((result) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
  addValueByUser: (req, res) => {
    const valueData = req.body;
    valueModel
      .addValueByUserId(valueData)
      .then((result) => {
        if (result.affectedRows !== 0) {
          res.status(201).send({ message: "Votre valeur a été ajoutée! 😀" });
        } else {
          res.status(401).send({ message: "Error update patient 😞" });
        }
      })
      .catch(() => {
        res.status(500).send({ message: "Il manque des données! 😞" });
      });
  },
};

module.exports = valueController;
