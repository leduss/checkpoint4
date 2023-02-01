const documentModel = require("../models/document");

const documentController = {
  getOrdo: (req, res, next) => {
    const { id } = req.params;
    documentModel
      .getOrdoCachet(id)
      .then((result) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = documentController;
