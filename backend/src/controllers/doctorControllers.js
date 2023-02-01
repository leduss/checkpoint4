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
};

module.exports = doctorController;
