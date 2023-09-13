import { createApp } from '../app.js'

import { MovieModel } from '../models/mysql/mysqlMovieFile.js'

createApp({ movieModel: MovieModel })