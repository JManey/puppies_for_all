const Puppy = require("../models/Puppy");
const User = require("../models/user");
const atob = require("atob");

module.exports = {
  addPup,
  index,
  show,
  update,
  deleteOne
};

async function deleteOne(req, res) {
  // console.log("controller delete ", req.params.id);
  const user = await User.findOne({ puppyRef: req.params.id });
  // console.log(user);
  const removedPupUser = await user.puppyRef.pull(req.params.id);
  const deletedPuppy = await Puppy.findByIdAndRemove(req.params.id);
  console.log(removedPupUser, "pulled pupref form user array");
  res.status(200).json(deletedPuppy);
}

async function update(req, res) {
  const updatedPuppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updatedPuppy);
}

async function show(req, res) {
  const puppy = await Puppy.findById(req.params.id);
  res.status(200).json(puppy);
}

async function addPup(req, res) {
  // const loggedInUser = req.user;
  const token = req.headers.authorization;
  const loggedInUser = JSON.parse(atob(token.split(".")[1]));
  const email = loggedInUser.user.email;
  console.log(email);
  const user = await User.findOne({ email: email });
  console.log(user);
  const puppy = new Puppy(req.body);

  console.log(puppy);

  try {
    await user.puppyRef.push(puppy);
    await puppy.save();
    await user.save();
    res.json({ puppy });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const puppies = await Puppy.find({});
    console.log(puppies);
    res.status(201).json(puppies);
  } catch (err) {
    res.status(400).json(err);
  }
}
