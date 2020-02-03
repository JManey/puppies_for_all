//aws
const AWS = require("aws-sdk");

const fs = require("fs");
const fileType = require("file-type");
const bluebird = require("bluebird");
const multiparty = require("multiparty");
const multer = require("multer");
const multerS3 = require("multer-s3");
// const config = require("../config");

//set region
//wouldn't read from .aws file
AWS.config.region = "us-east-2";

// configure the keys for accessing AWS
AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("acc key", AWS.config.credentials.accessKeyId);
    console.log("sectet key", AWS.config.credentials.secretAccessKey);
    console.log("region", AWS.config.region);
  }
});

// configure AWS to work with promises
// AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
//   }
// };

// const upload = multer({
//   fileFilter,
//   storage: multerS3({
//     acl: "public-read",
//     s3,
//     bucket: "puppies-for-all",
//     metadata: function(req, file, cb) {
//       cb(null, { fieldName: "puppies" });
//     },
//     key: function(req, file, cb) {
//       cb(null, Date.now().toString());
//     }
//   })
// });
// var AWS = require("aws-sdk");

// module.exports = upload;

// /aws
