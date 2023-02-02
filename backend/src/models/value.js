const db = require("../../config");

const getValuesByUserId = (id) => {
  return db
    .promise()
    .query("select valeur, date, id from value_sang where user_id = ?", [
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

const deleteValueByUserId = (id) => {
  return db
    .promise()
    .query("DELETE FROM value_sang WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};
const getValuesIdealByUserId = (id) => {
  return db
    .promise()
    .query("select min, max, id from valeurideal where user_id = ?", [
      Number(id),
    ])
    .then(([res]) => res);
};
const updateValuesIdealByUserId = (payload, id) => {
  return db
    .promise()
    .query("UPDATE valeurideal SET ? WHERE id=?", [payload, Number(id)])
    .then(([res]) => res);
};

module.exports = {
  getValuesByUserId,
  addValueByUserId,
  deleteValueByUserId,
  updateValuesIdealByUserId,
  getValuesIdealByUserId,
};
