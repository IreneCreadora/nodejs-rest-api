const { add } = require("./add");
const { getAll } = require("./getAll");
const { getById } = require("./getById");
const { updateById } = require("./updateById");
const { updateStatusContact } = require("./updateStatusContact");
const { deleteById } = require("./deleteById");

module.exports = {
  add,
  getAll,
  getById,
  updateById,
  updateStatusContact,
  deleteById,
};
