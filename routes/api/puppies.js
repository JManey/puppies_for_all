const express = require("express");
const router = express.Router();
const puppiesCtrl = require("../controllers/puppies");

router.post("/create", puppiesCtrl.create);

module.exports = router;
