const db = require("../../config");

const getAllUsers = () => {
  return db
    .promise()
    .query("SELECT * FROM user")
    .then(([res]) => res);
};
const findUsersById = (id) => {
  return db
    .promise()
    .query("SELECT * FROM user WHERE id = ?", [Number(id)])
    .then(([res]) => res);
};
const updateUser = (payload, id) => {
  return db
    .promise()
    .query("UPDATE user SET ? WHERE id = ?", [payload, id])
    .then(([res]) => res);
};

module.exports = {
  updateUser,
  getAllUsers,
  findUsersById,
};
