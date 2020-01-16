const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puppySchema = new Schema(
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Puppy", puppySchema);
