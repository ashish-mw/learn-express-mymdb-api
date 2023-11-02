const movies = [
  { id: 123456, title: "The Matrix", year: 1998 },
  { id: 123457, title: "The Matrix Reloaded", year: 2001 },
];

const getAllMovies = () => movies;

const addMovie = ({ title, year }) => {
  const id = new Date().getTime();
  const m = {
    id,
    title,
    year,
  };
  movies.push(m);
  return m;
};

const updateMovie = ({ id, payload }) => {
  const idx = movies.findIndex((m) => m.id == id);
  if (idx === -1) {
    return null;
  }

  movies[idx]["title"] = payload["title"];
  movies[idx]["year"] = payload["year"];

  return movies[idx];
};

const deleteMovie = ({ id }) => {
  const idx = movies.findIndex((m) => m.id == id);
  if (idx === -1) {
    return null;
  }

  const movie = movies[idx];
  movies.splice(idx, 1);
  return movie;
};

module.exports = {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
