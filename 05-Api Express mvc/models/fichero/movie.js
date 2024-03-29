import { randomUUID } from 'node:crypto'

import { readJSON } from '../../utils.js'

const movies = readJSON('./movies.json')

export class MovieModel {
    static async getAll({ genre }) {
        if (genre) {
            return movies.filter((movie) => movie.genre.some((g) => g.toLocaleLowerCase() == genre.toLocaleLowerCase()))
        }
        return movies
    }

    static async getById({ id }) {
        const movie = movies.find((movie) => movie.id === id)
        return movie
    }

    static async create({ object }) {
        const newMovie = {
            id: randomUUID(),
            ...object
        };
        movies.push(newMovie)
        return newMovie
    }

    static async deleteById({ id }) {
        const movieIndex = movies.findIndex((movie) => movie.id === id)
        if (movieIndex === -1) return false
        movies.splice(movieIndex, 1)
        return true
    }

    static async update({ id, object }) {
        const movieIndex = movies.findIndex((movie) => movie.id === id)
        if (movieIndex < 0) return false

        const updateMovie = {
            ...movies[movieIndex],
            ...object
        };

        movies[movieIndex] = updateMovie
        return updateMovie
    }
}
