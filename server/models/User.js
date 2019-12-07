const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: { type: String, required: true },
    name: String,
    surname: String,
    age: Number,
    skiLevel: { type: String, enum: ["SA", "MSA", "BSA", "OSA"] },
    about: String,
    totalTours: Number,
    totalGain: Number,
    tours: [{ type: Schema.Types.ObjectId, ref: "Tour" }],
    profilePicture: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
