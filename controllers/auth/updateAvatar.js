const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const { HttpError, ctrlWrapper } = require("../../helpers");

const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  if (!req.file) {
    throw HttpError(400, "Please upload an avatar");
  }
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;

  try {
    const resultUpload = path.join(avatarsDir, filename);
    Jimp.read(tempUpload, (err, avatar) => {
      if (err) throw err;
      avatar.resize(250, 250).quality(60).write(resultUpload);
    });

    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({
      avatarURL,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateAvatar: ctrlWrapper(updateAvatar) };
