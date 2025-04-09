const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const moviesModal = mongoose.model("movies");
  const movie_id = req.params.movie_id;

  const getMovie = await moviesModal.findOne({
    _id: movie_id,
  });

  if (!getMovie) throw "Movie does not exists";

  await moviesModal.deleteOne({
    _id: movie_id,
  });

  res.status(200).json({
    status: "success",
    message: "movie deleted",
  });
};

module.exports = deleteMovie;
