const Puppy = require("../models/Puppy");
const User = require("../models/user");
const atob = require("atob");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const uuidv1 = require("uuid/v1");
const path = require("path");
const url = require("url");
// const upload = require("../config/photoUpload");
const BUCKET_NAME = "puppies-for-all";

// photo handling for puppies
const s3 = new aws.S3();
const uploadFile = multer({
  storage: multerS3({
    s3: s3,
    bucket: "puppies-for-all",
    acl: "public-read",
    key: function(req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          path.extname(file.originalname)
      );
    }
  })
});

const params = {
  Bucket: BUCKET_NAME,
  Key: uuidv1(), // + fileName,

  ContentType: "image" //fileType
};

// upload file to bucket
// reqeust to s3 api for signed URL to upload file too
s3.getSignedUrl("putObject", params, (err, data) => {
  if (err) {
    console.log("error getting singedURL", err);
    res.json({ success: false, error: err });
  }

  // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved.
  const returnData = {
    signedRequest: data,
    url: `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`
  };
  // Send it all back
  console.log("returnData from backend", returnData);
  res.json({ success: true, data: { returnData } });
});

async function update(req, res) {
  const updatedPuppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json(updatedPuppy);
}

async function deleteOne(req, res) {
  // console.log("controller delete ", req.params.id);
  const user = await User.findOne({ puppyRef: req.params.id });
  // console.log(user);
  const removedPupUser = await user.puppyRef.pull(req.params.id);
  user.save();
  const deletedPuppy = await Puppy.findByIdAndRemove(req.params.id);
  // console.log(removedPupUser, "pulled pupref form user array");
  res.status(200).json(deletedPuppy);
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
  // console.log(email);
  const user = await User.findOne({ email: email });
  // console.log(user);
  const puppy = new Puppy(req.body);

  // console.log(puppy);

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
    // console.log(puppies);
    res.status(201).json(puppies);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  addPup,
  index,
  show,
  update,
  deleteOne,
  uploadFile
};
