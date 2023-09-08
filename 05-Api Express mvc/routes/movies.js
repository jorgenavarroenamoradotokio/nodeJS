import { Router } from 'express'

import { MovieController } from '../controller/movies.js'

export const moviesRouter = Router()

// Consultamos todas las peliculas
moviesRouter.get('/', MovieController.getAll)

// Consultamos una pelicula
moviesRouter.get('/:id', MovieController.getById)

// Registramos una pelicula
moviesRouter.post('/', MovieController.create)

// Actualizamos un campo de la pelicula
moviesRouter.patch("/:id", MovieController.update)

// Eliminamos una pelicular
moviesRouter.delete("/:id", MovieController.deleteById)
