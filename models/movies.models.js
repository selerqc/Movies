const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema(
  {
    movie_name: {
      type: String,
      required: [true, "Movie name required"],
    },
    info: {
      type: String,
      required: [true, "Movie info required"],
    },
    rating: {
      type: Number,
      required: [true, "Movie rating required"],
    },
    description: {
      type: String,
      required: [true, "Movie desription required"],
    },
  },
  { timestamps: true }
);

const moviesModal = mongoose.model("movies", moviesSchema);

module.exports = moviesModal;
