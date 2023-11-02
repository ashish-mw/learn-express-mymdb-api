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

module.exports = {
  getAllMovies,
  addMovie,
};
