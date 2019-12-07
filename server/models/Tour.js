const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourSchema = new Schema(
  {
    mountainName: String,
    mountainId: { type: Schema.Types.ObjectId, ref: "Mountain" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    picture: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
    }
  },
  {
    timestamps: true
  }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
