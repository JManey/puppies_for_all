const express = require("express");
const router = express.Router();
const puppiesCtrl = require("../../controllers/puppies");

router.post("/puppy", puppiesCtrl.addPup);
router.get("/puppy", puppiesCtrl.index);
router.get("/puppy/:id", puppiesCtrl.show);
router.put("/puppy/:id", puppiesCtrl.update);
router.put("/puppy/photo/:id", puppiesCtrl.uploadFile);
router.delete("/puppy/:id", puppiesCtrl.deleteOne);

module.exports = router;
