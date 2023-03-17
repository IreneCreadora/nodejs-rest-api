const express = require("express");

const { auth: ctrl } = require("../../controllers");

const { validateContacts, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post(
  "/register",
  validateContacts(schemas.registerSchema),
  ctrl.register
);

router.get("/verify/:verificationCode", ctrl.verifyEmail);

router.post(
  "/verify",
  validateContacts(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

// signin
router.post("/login", validateContacts(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.current);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
