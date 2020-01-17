const express = require("express");
const router = express.Router();
const User = require("../../models/user/");
const usersCtrl = require("../../controllers/users");

router.get("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);

module.exports = router;
