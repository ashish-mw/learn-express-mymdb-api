const { getAllMovies, addMovie, updateMovie } = require("../db");

const getAllMoviesController = (req, res) => {
  const movies = getAllMovies();
  res.send(movies);
};

const addMovieController = (req, res) => {
  const movie = addMovie(req.xop);
  res.send(movie);
};

const updateMovieController = (req, res) => {
  const movie = updateMovie({ payload: req.xop, id: req.params.id });
  res.send({
    movie: movie,
  });
};

module.exports = {
  getAllMoviesController,
  addMovieController,
  updateMovieController,
};
