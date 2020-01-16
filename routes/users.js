const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/puppies");

router.get("/api/user", puppiesCtrl.signup);
router.post("/api/user", puppiesCtrl.create);

module.exports = router;
