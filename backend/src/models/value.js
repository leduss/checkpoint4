const db = require("../../config");

const getValuesByUserId = (id) => {
  return db
    .promise()
    .query("select valeur, date from value_sang where user_id = ?", [
      Number(id),
    ])
    .then(([res]) => res);
};

const addValueByUserId = (payload) => {
  return db
    .promise()
    .query("INSERT INTO value_sang SET ?", [payload])
    .then(([res]) => res);
};

module.exports = { getValuesByUserId, addValueByUserId };
