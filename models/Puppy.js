const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    puppies: [
      {
        name: {
          type: String,
          required: true,
          unique: true
        },
        age: {
          type: Number,
          required: true
        },
        weight: {
          type: Number,
          required: true
        },
        sex: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
