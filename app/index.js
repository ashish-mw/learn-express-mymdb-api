const dotenv = require("dotenv");
dotenv.config();

const config = require("./config");

const express = require("express");
const morgan = require("morgan");

const { validate } = require("./middlewares/validate.middleware");
const { notfound } = require("./middlewares/notfound.middleware");
const { errorHandler } = require("./middlewares/errorhandler.middleware");

const { movieSchema } = require("./validations/movie.schema");

const {
  getAllMoviesController,
  addMovieController,
  updateMovieController,
} = require("./controllers/movie.controller");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// READ
app.get("/movies", getAllMoviesController);

// CREATE
app.post("/movies", validate(movieSchema), addMovieController);

// UPDATE
app.put("/movies/:id", validate(movieSchema), updateMovieController);

// 404 handler
app.use(notfound);

// error handler middleware
app.use(errorHandler);

app.listen(config.appPort, () => {
  console.log(`Server running on ${config.appPort}`);
});
