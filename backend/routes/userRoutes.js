const express = require("express");
const router = express.Router();

const {
  loginUser,
  signupUser,
  authenticateUser,
  isLogin,
} = require("../Controllers/userController");

router.post("/signup", signupUser);

// router.post("/checkauth", authenticateUser, isLogin);

router.post("/login", loginUser);

module.exports = router;
