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
    },
    snowQuality: { type: String, enum: ["icey", "powder", "broken"] },
    snowDepth: { type: Number, enum: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] },
    recomended: { type: String, enum: ["Yes", "No"] },
    comments: String
  },
  {
    timestamps: true
  }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
