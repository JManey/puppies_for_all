const Puppy = require("../models/puppy");
const User = require("../models/user");
const atob = require("atob");

module.exports = {
  addPup,
  index
  // show
};

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
    const puppyIndex = await Puppy.find({});
    res.status(201).json(puppyIndex);
  } catch (err) {
    res.status(400).json(err);
  }
}
