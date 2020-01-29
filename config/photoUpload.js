//aws
const AWS = require("aws-sdk");
const uuid = require("uuid");
const fs = require("fs");
const fileType = require("file-type");
const bluebird = require("bluebird");
const multiparty = require("multiparty");
const multer = require("multer");
const multerS3 = require("multer-s3");
// const config = require("../config");

// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-2"
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

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
  }
});

module.exports = upload;

// /aws
