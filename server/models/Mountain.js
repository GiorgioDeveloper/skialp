const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mountainSchema = new Schema(
  {
    mountainName: String,
    location: String,
    height: Number,
    elevationGain: Number,
    link: String,
    difficulty: String,
    region: String,
    tours: [{ type: Schema.Types.ObjectId, ref: "Tour" }]
  },
  {
    timestamps: true
  }
);

const Mountain = mongoose.model("Mountain", mountainSchema);

module.exports = Mountain;
