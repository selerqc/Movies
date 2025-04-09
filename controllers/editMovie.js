const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const movieModel = mongoose.model("movies");

  const { movie_id, movie_name, rating, info, description } = req.body;

  if (!movie_name) throw "Movie name must be provided";
  if (!info) throw "Movie info must be provided";
  if (!rating) throw "Movie rating must be provided";
  if (rating < 1 || rating > 10) throw "rating must be between 1-10";

  await movieModel.updateOne(
    {
      _id: movie_id,
    },
    {
      movie_name: movie_name,
      info: info,
      rating: rating,
      description: description,
    },
    { runValidators: true }
  );
  res.status(200).json({
    status: "edit movie success",
  });
};

module.exports = editMovie;
