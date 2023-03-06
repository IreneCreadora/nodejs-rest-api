const express = require("express");

const { auth: ctrl } = require("../../controllers");

const { validateContacts, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post(
  "/register",
  validateContacts(schemas.registerSchema),
  ctrl.register
);

// signin
router.post("/login", validateContacts(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.current);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
