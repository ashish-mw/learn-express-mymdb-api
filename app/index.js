const dotenv = require("dotenv");
dotenv.config();

const config = require("./config");

const express = require("express");
const morgan = require("morgan");

const Joi = require("joi");

const { getAllMovies, addMovie } = require("./db");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// READ
app.get("/movies", (req, res) => {
  const movies = getAllMovies();
  res.send(movies);
});

// CREATE
app.post("/movies", (req, res) => {
  // {title: string, year: number}
  const addMovieSchema = Joi.object({
    title: Joi.string().required(),
    year: Joi.number().required(),
  });

  const { value, error } = addMovieSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details.map((d) => d.message),
    });
  }

  const movie = addMovie(value);
  res.send(movie);
});

app.listen(config.appPort, () => {
  console.log(`Server running on ${config.appPort}`);
});
