const db = require("../../config");

const findDoctorByUserId = (id) => {
  return db
    .promise()
    .query("SELECT * FROM doctor WHERE user_id = ?", [Number(id)])
    .then(([res]) => res);
};

module.exports = { findDoctorByUserId };
