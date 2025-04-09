const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const { response } = require("express");
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const mongoose = require("mongoose");
const movieRecommendation = async (req, res) => {
  const moviesModal = mongoose.model("movies");
  const { movie_name, info, rating, description } = req.body;
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });
  const allMovies = await moviesModal.find({});

  const movies = allMovies.map((el) => el.movie_name).join(",");
  const prompt = `I need movie recommendation based on these movies ${movies} give me 10. separate movies with comma and give me only the title`;

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
};

module.exports = movieRecommendation;
