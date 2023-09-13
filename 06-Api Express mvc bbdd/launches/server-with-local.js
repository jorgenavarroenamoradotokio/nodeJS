import { createApp } from '../app.js'

import { MovieModel } from '../models/local-file-system/localMovieFile.js'

createApp({ movieModel: MovieModel })