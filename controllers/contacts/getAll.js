const { Contact } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;

  let contacts;

  if (favorite) {
    contacts = await Contact.find(
      { owner, favorite },
      "-createdAt -updatedAt",
      {
        skip,
        limit: Number(limit),
      }
    ).populate("owner", "_id email subscription");
  } else {
    contacts = await Contact.find({ owner }, "-createdAt -updatedAt").populate(
      "owner",
      "_id email subscription"
    );
  }
  res.json({ result: contacts });
};
module.exports = { getAll: ctrlWrapper(getAll) };
