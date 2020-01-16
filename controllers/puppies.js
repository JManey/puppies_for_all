const Puppy = require("../models/puppy");

module.exports = {
  create
  // index,
  // show
};

async function create(req, res) {
  const puppy = new Puppy(req.body);
  try {
    await puppy.save();
    res.status(201).json(puppy);
  } catch (err) {
    res.status(400).json(err);
  }
}
