const { register } = require("./register");
const { login } = require("./login");
const { current } = require("./current");
const { logout } = require("./logout");
const { updateAvatar } = require("./updateAvatar");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");

module.exports = { register, verifyEmail, resendVerifyEmail, login, current, logout, updateAvatar };
