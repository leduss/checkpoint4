const doctorModel = require("../models/doctor");

const doctorController = {
  getDoctorByUserId: (req, res, next) => {
    const { id } = req.params;
    doctorModel
      .findDoctorByUserId(id)
      .then(([result]) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
  updateDoctor: (req, res) => {
    const doctorData = req.body;
    const { id } = req.params;
    doctorModel
      .updateOneDoctor(doctorData, id)
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

module.exports = doctorController;
