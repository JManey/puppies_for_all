const express = require("express");
const router = express.Router();
const puppiesCtrl = require("../../controllers/puppies");

router.post("/puppy", puppiesCtrl.addPup);
router.get("/puppy", puppiesCtrl.index);
router.get("/puppy/:id", puppiesCtrl.show);
router.post("/puppy/:id", puppiesCtrl.update);

module.exports = router;
