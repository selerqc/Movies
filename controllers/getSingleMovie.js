const mongoose = require("mongoose");

const getSingleMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const moviesData = await moviesModel.find({
    _id: req.params.movie_id,
  });

  res.status(200).json({
    status: "get single movie",
    data: moviesData,
  });
};

module.exports = getSingleMovie;
