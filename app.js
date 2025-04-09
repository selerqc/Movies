//express handling errors
require("express-async-errors");

const express = require("express");
const addMovie = require("./controllers/addMovie");

const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
require("dotenv").config();
const mongoose = require("mongoose");
const movieRecommendation = require("./controllers/movieRecommendation");
const errorHandler = require("./handlers/errorHandler");

//connection to mongo db
mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("database connection success");
  })
  .catch(() => {
    console.log("connection failed");
  });

const app = express();

app.use(express.json());
//models
require("./models/movies.models");

//routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello",
  });
});
app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:movie_id", deleteMovie);

//openai suggestions
app.get("/api/movies/openai/getRecommendation", movieRecommendation);

app.use(errorHandler);

const port = 8000;
app.listen(port, () => {
  console.log(` server connected listening at port ${port}`);
});
