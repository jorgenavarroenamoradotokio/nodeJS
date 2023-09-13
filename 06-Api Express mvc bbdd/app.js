import express, { json } from "express";
import { createMovieRouter } from "./routes/routesMovie.js";
import { corsMiddleware } from "./middlewares/cors.js";

// después
export const createApp = ({ movieModel }) => {
  const PORT = process.env.PORT ?? 1234;

  const app = express();
  app.disable("x-powered-by");
  app.use(json());
  app.use(corsMiddleware());
  app.use("/movies", createMovieRouter({ movieModel }));

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
  });
};
