const db = require("../../config");

const getOrdoCachet = (id) => {
  return db
    .promise()
    .query(
      "select * from document inner join user_document ud on document.id = ud.document_id where user_id = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

module.exports = { getOrdoCachet };
