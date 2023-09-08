const express = require("express");
const crypto = require("node:crypto");
const cors = require('cors')

const movies = require("./movies.json");
const { validateMovie, validatePartialMovie } = require("./schemas/movies");

const PORT = process.env.PORT ?? 1234;

const app = express();
app.use(express.json());
app.disable("x-powered-by");

app.use(cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://127.0.0.1:5500',
            'http://localhost:1234'
          ]

          if (ACCEPTED_ORIGINS.includes(origin)) {
            return callback(null, true)
          }

          if (!origin) {
            return callback(null, true)
          }

          return callback(new Error('Not allowed by CORS'))
    }
}));

// Obtenemos todas las movies o aquellas que cumplan el genero indicado
app.get("/movies", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some(
        (g) => g.toLocaleLowerCase() == genre.toLocaleLowerCase()
      )
    );
    return res.json(filteredMovies);
  }
  res.json(movies);
});

// Obtenemos la informacion de una pelicula por ID
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "Movie not found" });
});

// Registramos una pelicula
app.post("/movies", (req, res) => {
  const result = validateMovie(req.body);
  if (result.error)
    return res.status(422).json({ error: JSON.parse(result.error.message) });

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// Actualizamos un campo de la pelicula
app.patch("/movies/:id", (req, res) => {
  const { id } = req.params;
  const result = validatePartialMovie(req.body);

  if (result.error)
    return res.status(422).json({ error: JSON.parse(result.error.message) });

  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex < 0)
    return res.status(404).json({ message: "Movie not found" });

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updateMovie;

  return res.status(201).json(updateMovie);
});

// Eliminamos una pelicular
app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  movies.splice(movieIndex, 1);

  return res.json({ message: "Movie deleted" });
});

// Indicamos en que ruta lanzamos la api
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
