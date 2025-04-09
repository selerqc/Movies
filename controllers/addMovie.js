const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const { movie_name, info, rating, description } = req.body;

  //validation

  // if (!movie_name) throw "Movie name must be provided";
  // if (!info) throw "Movie info must be provided";
  // if (!rating) throw "Movie rating must be provided";
  if (rating < 1 || rating > 10) throw "rating must be between 1-10";

  //success

  await moviesModel.create({
    movie_name: movie_name,
    info: info,
    rating: rating,
    description: description,
  });

  res.status(200).json({
    status: "add movie route",
    message: "Movie added success",
  });
};

module.exports = addMovie;
