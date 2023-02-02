const db = require("../../config");

const findDoctorByUserId = (id) => {
  return db
    .promise()
    .query("SELECT * FROM doctor WHERE user_id = ?", [Number(id)])
    .then(([res]) => res);
};
const updateOneDoctor = (payload, id) => {
  return db
    .promise()
    .query("UPDATE doctor SET ? WHERE id = ?", [payload, Number(id)])
    .then(([res]) => res);
};

module.exports = { findDoctorByUserId, updateOneDoctor };
