import express, { json } from 'express'

import { moviesRouter } from './routes/movies.js';
import { corsMiddlewatre } from './middlewares/cors.js';

const PORT = process.env.PORT ?? 1234;

const app = express();
app.disable("x-powered-by");
app.use(json());
app.use(corsMiddlewatre());
app.use('/movies', moviesRouter)

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
});