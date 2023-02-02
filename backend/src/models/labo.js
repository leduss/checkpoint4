const db = require("../../config");

const findLaboByUserId = (id) => {
  return db
    .promise()
    .query("SELECT * FROM labo WHERE user_id = ?", [Number(id)])
    .then(([res]) => res);
};
const updateOneLabo = (payload, id) => {
  return db
    .promise()
    .query("UPDATE labo SET ? WHERE id = ?", [payload, Number(id)])
    .then(([res]) => res);
};

module.exports = { findLaboByUserId, updateOneLabo };
