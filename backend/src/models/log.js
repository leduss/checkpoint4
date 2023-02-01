const db = require("../../config");

const createUser = (payload) => {
  return db
    .promise()
    .query("INSERT INTO user SET ?", [payload])
    .then(([res]) => res);
};

const findUserByEmail = (email) => {
  return db
    .promise()
    .query("SELECT * FROM user where email = ?", [email])
    .then(([res]) => res);
};

module.exports = {
  findUserByEmail,
  createUser,
};
